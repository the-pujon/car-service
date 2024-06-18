import express from "express";
import { StudentControllers } from "./service.controller";
const route = express.Router();

route.post("/", StudentControllers.createService);

export const ServiceRoutes = route;
