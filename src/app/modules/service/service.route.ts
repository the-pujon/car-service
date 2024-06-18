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

export const ServiceRoutes = route;
