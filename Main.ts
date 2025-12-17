import readline from "readline";
import { ParkingFloor } from "./parkinglot/ParkingFloor";
import { ParkingLot } from "./parkinglot/ParkingLot";
import { EntranceGate } from "./gates/EntranceGate";
import { ExitGate } from "./gates/ExitGate";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // this is becasue we can interact with the code through our cli

// Initialize parking lot
const floor = new ParkingFloor(1, 2, 2); // 2 car, 2 bike spots
const parkingLot = new ParkingLot([floor]);

const entranceGate = new EntranceGate(parkingLot);
const exitGate = new ExitGate(parkingLot);

console.log("=== Welcome to the Parking Lot System ===");

function showMenu() {
  console.log(`
1. Park Vehicle
2. Exit Vehicle
3. Exit System
`);
}

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function mainLoop() {
  let exit = false;

  while (!exit) {
    showMenu();
    const choice = await askQuestion("Choose an option: ");

    switch (choice.trim()) {
      case "1":
        const license = await askQuestion("Enter License Plate: ");
        const type = await askQuestion("Enter Vehicle Type (Car/Bike): ");
        const ticket = entranceGate.processEntrance(
          license.trim(),
          type.trim()
        );
        if (ticket) {
          console.log(`Vehicle parked at spot ${ticket.spot.spotNumber}`);
        } else {
          console.log("No available spot or invalid vehicle type");
        }
        break;

      case "2":
        const plate = await askQuestion("Enter License Plate to exit: ");
        const t = entranceGate.tickets.get(plate.trim());
        if (!t) {
          console.log("Ticket not found");
          break;
        }
        const fee = exitGate.processExit(t);
        entranceGate.tickets.delete(plate.trim());
        console.log(`Vehicle exited. Fee: $${fee}`);
        break;

      case "3":
        exit = true;
        rl.close();
        console.log("Thank you!");
        break;

      default:
        console.log("Invalid option");
    }
  }
}

mainLoop();
