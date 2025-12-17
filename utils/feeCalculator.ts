import { Vehicle } from "../vehicles/Vehicle";

export class FeeCalculator {
  // Calculate fee by delegating to the vehicle's calculateFee method
  static calculateFee(hoursStayed: number, vehicle: Vehicle): number {
    return vehicle.calculateFee(hoursStayed);
  }
}
