export abstract class Vehicle {
  constructor(public licensePlate: string, public vehicleType: string) {}

  abstract calculateFee(hoursStayed: number): number;
}
