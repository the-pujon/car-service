"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_route_1 = require("../modules/service/service.route");
const auth_route_1 = require("../modules/auth/auth.route");
const booking_route_1 = require("../modules/booking/booking.route");
const slot_route_1 = require("../modules/slot/slot.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/services",
        route: service_route_1.ServiceRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/bookings",
        route: booking_route_1.BookingRoutes,
    },
    {
        path: "/slots",
        route: slot_route_1.SlotRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
