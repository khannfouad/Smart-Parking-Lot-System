import { Vehicle } from "../vehicles/Vehicle";
import { ParkingSpot } from "./ParkingSpot";

export class Ticket {
  public endTime?: Date;
  public fee?: number;

  constructor(
    public vehicle: Vehicle,
    public spot: ParkingSpot,
    public startTime: Date = new Date()
  ) {}

  checkOut() {
    this.endTime = new Date();
    const hours = Math.ceil(
      (this.endTime.getTime() - this.startTime.getTime()) / (1000 * 60 * 60)
    );
    this.fee = this.vehicle.calculateFee(hours);
  }
}
