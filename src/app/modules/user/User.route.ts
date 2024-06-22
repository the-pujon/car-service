import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CreateUserValidation } from "./user.validation";

const router = Router();

router.post(
  "/signup",
  validateRequest(CreateUserValidation),
  UserController.createUser,
);

export const UserRoutes = router;
