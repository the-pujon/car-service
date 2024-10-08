"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRoutes = void 0;
const express_1 = require("express");
const slot_controller_1 = require("./slot.controller");
//import { auth } from "../../middlewares/auth";
const router = (0, express_1.Router)();
router.get("/availability", slot_controller_1.SlotControllers.getSlotController);
exports.SlotRoutes = router;
