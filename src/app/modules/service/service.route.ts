import express from "express";
import { ServiceControllers } from "./service.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  ServiceCreateValidation,
  ServiceUpdateValidation,
} from "./service.validation";
const route = express.Router();

route.post(
  "/",
  validateRequest(ServiceCreateValidation),
  ServiceControllers.createService,
);

route.get("/", ServiceControllers.getService);
route.get("/:id", ServiceControllers.getServiceById);
route.patch(
  "/:id",
  validateRequest(ServiceUpdateValidation),
  ServiceControllers.updateServiceByID,
);
route.delete("/:id", ServiceControllers.deleteServiceByID);
export const ServiceRoutes = route;
