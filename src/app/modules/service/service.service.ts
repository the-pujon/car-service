import { TService } from "./service.interface";
import { ServiceModel } from "./service.model";

//create service
const createServiceIntoDB = async (payLoad: TService) => {
  const result = await ServiceModel.create(payLoad);

  return result;
};

//get service
const getServicesFromDB = async () => {
  const result = await ServiceModel.find().exec();

  return result;
};

//get single service
const getServiceByIDFromDB = async (id: string) => {
  const result = await ServiceModel.findById(id).exec();

  return result;
};

//delete single service
const deleteServiceByIDFromDB = async (id: string) => {
  const result = await ServiceModel.findByIdAndDelete(id).exec();

  return result;
};

export const CarServiceServices = {
  createServiceIntoDB,
  getServicesFromDB,
  getServiceByIDFromDB,
  deleteServiceByIDFromDB,
};
