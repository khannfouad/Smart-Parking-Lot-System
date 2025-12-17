import { ParkingFloor } from "./ParkingFloor";
import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "../vehicles/Vehicle";

export class ParkingLot {
  constructor(public floors: ParkingFloor[]) {}

  findAvailableSpot(vehicleType: string): ParkingSpot | null {
    for (const floor of this.floors) {
      const spot = floor.findAvailableSpot(vehicleType);
      if (spot) return spot;
    }
    return null;
  }

  parkVehicle(vehicle: Vehicle): ParkingSpot | null {
    const spot = this.findAvailableSpot(vehicle.vehicleType);
    if (!spot) return null;
    spot.parkVehicle(vehicle);
    return spot;
  }

  vacateSpot(spot: ParkingSpot) {
    spot.vacate();
  }

  getSpotByNumber(spotNumber: number): ParkingSpot | null {
    for (const floor of this.floors) {
      for (const spot of floor.spots) {
        if (spot.spotNumber === spotNumber) return spot;
      }
    }
    return null;
  }
}
