//import express from "express";
//import { ServiceControllers } from "./service.controller";
//import validateRequest from "../../middlewares/validateRequest";
//import {
//  ServiceCreateValidation,
//  ServiceUpdateValidation,
//} from "./service.validation";
//import { SlotRoutes } from "../slot/slot.route";
//const route = express.Router();

////slot endpoint
//route.use("/slot", SlotRoutes);

//route.post(
//  "/",
//  validateRequest(ServiceCreateValidation),
//  ServiceControllers.createService,
//);

//route.get("/", ServiceControllers.getService);
//route.get("/:id", ServiceControllers.getServiceById);
//route.patch(
//  "/:id",
//  validateRequest(ServiceUpdateValidation),
//  ServiceControllers.updateServiceByID,
//);
//route.delete("/:id", ServiceControllers.deleteServiceByID);

//export const ServiceRoutes = route;

import express from "express";
import { ServiceControllers } from "./service.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  ServiceCreateValidation,
  ServiceUpdateValidation,
} from "./service.validation";
import { SlotRoutes } from "../slot/slot.route";

const router = express.Router();

//slot routes
router.use("/slots", SlotRoutes);

router.post(
  "/",
  validateRequest(ServiceCreateValidation),
  ServiceControllers.createService,
);

router.get("/", ServiceControllers.getService);
router.get("/:id", ServiceControllers.getServiceById);
router.patch(
  "/:id",
  validateRequest(ServiceUpdateValidation),
  ServiceControllers.updateServiceByID,
);
router.delete("/:id", ServiceControllers.deleteServiceByID);

export const ServiceRoutes = router;
