import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.";
import sendResponse from "../../utils/sendResponse";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBookingIntoDB(req.body);

  //console.log(result);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking created successfully",
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
};
