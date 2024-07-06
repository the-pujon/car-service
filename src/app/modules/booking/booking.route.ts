import { Router } from "express";
import { BookingControllers } from "./booking.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BookingCreateValidation } from "./booking.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post(
  "/",
  auth("user"),
  validateRequest(BookingCreateValidation),
  BookingControllers.createBooking,
);

router.get(
  "/",
  auth("admin"),
  //validateRequest(BookingCreateValidation),
  BookingControllers.getBooking,
);

export const BookingRoutes = router;
