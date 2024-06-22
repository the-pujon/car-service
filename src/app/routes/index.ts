import { Router } from "express";
import { ServiceRoutes } from "../modules/service/service.route";
import { UserRoutes } from "../modules/user/User.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/services",
    route: ServiceRoutes,
  },
  {
    path: "/auth",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
