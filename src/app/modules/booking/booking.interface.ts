//export type TVehicleType =
//  | "car"
//  | "truck"
//  | "SUV"
//  | "van"
//  | "motorcycle"
//  | "bus"
//  | "electricVehicle"
//  | "hybridVehicle"
//  | "bicycle"
//  | "tractor";

export type TBooking = {
  customer: string;
  service: string;
  slot: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
