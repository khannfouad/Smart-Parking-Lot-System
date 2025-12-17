import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "../vehicles/Vehicle";

export class BikeParkingSpot extends ParkingSpot {
  constructor(spotNumber: number) {
    super(spotNumber, "Bike");
  }

  canParkVehicle(vehicle: Vehicle): boolean {
    return vehicle.vehicleType.toLowerCase() === "bike";
  }
}
