import { Vehicle } from "./Vehicle";

export class BikeVehicle extends Vehicle {
  private static RATE = 5; // 5rs per hour

  constructor(licensePlate: string) {
    super(licensePlate, "Bike");
  }

  calculateFee(hoursStayed: number): number {
    return hoursStayed * BikeVehicle.RATE;
  }
}
