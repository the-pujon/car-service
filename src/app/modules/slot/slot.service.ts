import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ServiceModel } from "../service/service.model";
import { TSlot } from "./slot.interface";
import { SlotModel } from "./slot.model";
import { SlotUtils } from "./slot.utils";

const createSlotIntoDB = async (payload: TSlot) => {
  const { date, endTime, startTime, service } = payload;

  const endTimeInMin = SlotUtils.timeToMinute(endTime);

  const startTimeInMin = SlotUtils.timeToMinute(startTime);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDuration = await ServiceModel.findById(service).select({
    duration: 1,
    _id: 0,
  });

  const duration = getDuration?.duration || 60;

  //if service id is invalid then throw error
  if (!getDuration) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid service id");
  }

  const existingSlot = await SlotModel.find({
    service,
    date,
    startTime: { $gte: startTime, $lt: endTime },
  });

  //throw error if slot overlap
  if (existingSlot.length > 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "Slot already exists");
  }

  const Slots = [];

  for (let time = startTimeInMin; time < endTimeInMin; time += duration) {
    const slotStartTime = SlotUtils.minuteToTime(time);
    const slotEndTime = SlotUtils.minuteToTime(time + duration);

    const slotData = {
      service,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
    };

    const createSlotIntoDB = await SlotModel.create(slotData);

    Slots.push(createSlotIntoDB);
  }

  return Slots;
};

//getting slots
const getSlotsFromDB = async (date: string, serviceID: string) => {
  let result;
  let message = "";

  if (date && serviceID) {
    result = await SlotModel.find({ service: serviceID, date }).populate(
      "service",
    );

    //check if result is empty array
    if (result.length === 0) {
      message = `No slots found for this serviceId: ${serviceID} and this date: ${date}`;
    }
  } else if (date) {
    result = await SlotModel.find({ date }).populate("service");

    //check if result is empty array
    if (result.length === 0) {
      message = `No slots found for this date: ${date}`;
    }
  } else if (serviceID) {
    result = await SlotModel.find({ service: serviceID }).populate("service");

    //check if result is empty array
    if (result.length === 0) {
      message = `No slots found for this serviceId: ${serviceID}`;
    }
  } else {
    result = await SlotModel.find().populate("service");

    //check if result is empty array
    if (result.length === 0) {
      message = `No slots found. Slot is empty`;
    }
  }

  //finally throw error if result is an empty array
  if (result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, message);
  }

  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getSlotsFromDB,
};