import { Router } from "express";
import { BookingControllers } from "./booking.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BookingCreateValidation } from "./booking.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post(
  "/",
  auth("user", "admin"),
  validateRequest(BookingCreateValidation),
  BookingControllers.createBooking,
);

router.get("/", auth("admin"), BookingControllers.getBooking);

router.get(
  "/my-bookings",
  auth("user", "admin"),
  BookingControllers.getUserBooking,
);

export const BookingRoutes = router;
