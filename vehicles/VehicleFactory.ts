import { Vehicle } from "./Vehicle";
import { CarVehicle } from "./CarVehicle";
import { BikeVehicle } from "./BikeVehicle";

export class VehicleFactory {
  static createVehicle(
    vehicleType: string,
    licensePlate: string
  ): Vehicle | null {
    if (vehicleType.toLowerCase() === "car")
      return new CarVehicle(licensePlate);
    if (vehicleType.toLowerCase() === "bike")
      return new BikeVehicle(licensePlate);
    return null;
  }
}
