import { TBooking } from "./booking.interface";

const createBookingIntoDB = async (payload: TBooking) => {
  console.log(payload);

  return payload;
};

export const BookingService = {
  createBookingIntoDB,
};
