import { ParkingLot } from "../parkinglot/ParkingLot";
import { VehicleFactory } from "../vehicles/VehicleFactory";
import { Vehicle } from "../vehicles/Vehicle";
import { Ticket } from "../parkinglot/Ticket";

export class EntranceGate {
  public tickets: Map<string, Ticket> = new Map();

  constructor(private parkingLot: ParkingLot) {}

  processEntrance(licensePlate: string, vehicleType: string): Ticket | null {
    const vehicle = VehicleFactory.createVehicle(vehicleType, licensePlate);
    if (!vehicle) return null;

    const spot = this.parkingLot.parkVehicle(vehicle);
    if (!spot) return null;

    const ticket = new Ticket(vehicle, spot);
    this.tickets.set(vehicle.licensePlate, ticket);

    return ticket;
  }
}
