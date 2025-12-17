import { ParkingSpot } from "./ParkingSpot";
import { CarParkingSpot } from "./CarParkingSpot";
import { BikeParkingSpot } from "./BikeParkingSpot";

export class ParkingFloor {
  public spots: ParkingSpot[] = [];

  constructor(
    public floorNumber: number,
    numCarSpots: number,
    numBikeSpots: number
  ) {
    for (let i = 0; i < numCarSpots; i++)
      this.spots.push(new CarParkingSpot(i + 1));
    for (let i = 0; i < numBikeSpots; i++)
      this.spots.push(new BikeParkingSpot(numCarSpots + i + 1));
  }

  findAvailableSpot(vehicleType: string): ParkingSpot | null {
    for (const spot of this.spots) {
      if (
        !spot.isOccupied &&
        spot.spotType.toLowerCase() === vehicleType.toLowerCase()
      ) {
        return spot;
      }
    }
    return null;
  }
}
