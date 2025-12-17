import { Vehicle } from "../vehicles/Vehicle";

export abstract class ParkingSpot {
  vehicle?: Vehicle;
  isOccupied: boolean = false;

  constructor(public spotNumber: number, public spotType: string) {}

  abstract canParkVehicle(vehicle: Vehicle): boolean;

  parkVehicle(vehicle: Vehicle) {
    if (this.isOccupied) throw new Error("Spot is already occupied");
    if (!this.canParkVehicle(vehicle))
      throw new Error(`Cannot park ${vehicle.vehicleType} here`);
    this.vehicle = vehicle;
    this.isOccupied = true;
  }

  vacate() {
    this.vehicle = undefined;
    this.isOccupied = false;
  }
}
