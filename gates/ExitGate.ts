import { ParkingLot } from "../parkinglot/ParkingLot";
import { Ticket } from "../parkinglot/Ticket";

export class ExitGate {
  constructor(private parkingLot: ParkingLot) {}

  processExit(ticket: Ticket): number | null {
    if (!ticket) return null;

    ticket.checkOut();
    this.parkingLot.vacateSpot(ticket.spot);

    return ticket.fee || 0;
  }
}
