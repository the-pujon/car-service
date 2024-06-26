import { Router } from "express";
import { SlotControllers } from "./slot.controller";

const router = Router();

router.post("/", SlotControllers.createSlotController);

router.get("/availability", SlotControllers.getSlotController);

export const SlotRoutes = router;
