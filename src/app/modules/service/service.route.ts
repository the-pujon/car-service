import express from "express";
import { ServiceControllers } from "./service.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  ServiceCreateValidation,
  ServiceUpdateValidation,
} from "./service.validation";
//import { SlotRoutes } from "../slot/slot.route";
import { auth } from "../../middlewares/auth";
import { SlotControllers } from "../slot/slot.controller";

const router = express.Router();

//slot routes
router.post("/slots", auth("admin"), SlotControllers.createSlotController);

router.post(
  "/",
  auth("admin"),
  validateRequest(ServiceCreateValidation),
  ServiceControllers.createService,
);

router.get("/", ServiceControllers.getService);
router.get("/:id", ServiceControllers.getServiceById);
router.patch(
  "/:id",
  auth("admin"),
  validateRequest(ServiceUpdateValidation),
  ServiceControllers.updateServiceByID,
);
router.delete("/:id", auth("admin"), ServiceControllers.deleteServiceByID);

export const ServiceRoutes = router;
