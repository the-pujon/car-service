import express from "express";
import { StudentControllers } from "./service.controller";
import validateRequest from "../../middlewares/validateRequest";
import ServiceCreateValidation from "./service.validation";
const route = express.Router();

route.post(
  "/",
  validateRequest(ServiceCreateValidation),
  StudentControllers.createService,
);

route.get("/", StudentControllers.getService);
route.get("/:id", StudentControllers.getServiceById);

export const ServiceRoutes = route;
