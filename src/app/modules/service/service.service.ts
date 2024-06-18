import { TService } from "./service.interface";
import { ServiceModel } from "./service.model";

const createServiceIntoDB = async (payLoad: TService) => {
  const result = await ServiceModel.create(payLoad);

  return result;
};

export const CarServiceServices = {
  createServiceIntoDB,
};
