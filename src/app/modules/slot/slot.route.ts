import { Router } from "express";
import { SlotControllers } from "./slot.controller";
//import { auth } from "../../middlewares/auth";

const router = Router();

router.get("/availability", SlotControllers.getSlotController);

export const SlotRoutes = router;
