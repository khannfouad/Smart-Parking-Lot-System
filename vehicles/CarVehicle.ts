import { Vehicle } from "./Vehicle";

export class CarVehicle extends Vehicle {
  private static RATE = 10; // 10rs per hour

  constructor(licensePlate: string) {
    super(licensePlate, "Car");
  }

  calculateFee(hoursStayed: number): number {
    return hoursStayed * CarVehicle.RATE;
  }
}
