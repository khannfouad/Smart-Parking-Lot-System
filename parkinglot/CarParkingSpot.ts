import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "../vehicles/Vehicle";

export class CarParkingSpot extends ParkingSpot {
  constructor(spotNumber: number) {
    super(spotNumber, "Car");
  }

  canParkVehicle(vehicle: Vehicle): boolean {
    return vehicle.vehicleType.toLowerCase() === "car";
  }
}
