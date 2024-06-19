import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.";
import sendResponse from "../../utils/sendResponse";
import { CarServiceServices } from "./service.service";

//create service controller
const createService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.createServiceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

//get service controller
const getService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.getServicesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Services retrieve successfully",
    data: result,
  });
});

//get single service controller
const getServiceById = catchAsync(async (req, res) => {
  const result = await CarServiceServices.getServiceByIDFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieve successfully",
    data: result,
  });
});

//delete single service controller
const deleteServiceByID = catchAsync(async (req, res) => {
  const result = await CarServiceServices.deleteServiceByIDFromDB(
    req.params.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully",
    data: result,
  });
});

//exporting all controllers
export const StudentControllers = {
  createService,
  getService,
  getServiceById,
  deleteServiceByID,
};
