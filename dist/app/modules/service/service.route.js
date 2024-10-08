"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
//import { SlotRoutes } from "../slot/slot.route";
const auth_1 = require("../../middlewares/auth");
const slot_controller_1 = require("../slot/slot.controller");
const router = express_1.default.Router();
//slot routes
router.post("/slots", (0, auth_1.auth)("admin"), slot_controller_1.SlotControllers.createSlotController);
router.post("/", (0, auth_1.auth)("admin"), (0, validateRequest_1.default)(service_validation_1.ServiceCreateValidation), service_controller_1.ServiceControllers.createService);
router.get("/", service_controller_1.ServiceControllers.getService);
router.get("/:id", service_controller_1.ServiceControllers.getServiceById);
router.patch("/:id", (0, auth_1.auth)("admin"), (0, validateRequest_1.default)(service_validation_1.ServiceUpdateValidation), service_controller_1.ServiceControllers.updateServiceByID);
router.delete("/:id", (0, auth_1.auth)("admin"), service_controller_1.ServiceControllers.deleteServiceByID);
exports.ServiceRoutes = router;