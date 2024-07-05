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

export const BookingRoutes = router;
