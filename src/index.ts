// Importing the Truck class from the Truck module
import Truck from "./classes/Truck.js";
// Importing the Car class from the Car module
import Car from "./classes/Car.js";
// Importing the Motorbike class from the Motorbike module
import Motorbike from "./classes/Motorbike.js";
// Importing the Wheel class from the Wheel module
import Wheel from "./classes/Wheel.js";
// Importing the Cli class from the Cli module
import Cli from "./classes/Cli.js";


const vehicles = [];
/// 5000 is the weight of the truck and 10000 is the max load of the truck
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000); 
/// 3000 is the weight of the car and 130 is the max speed of the car
const car1 = new Car(Cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []); 
/// 17 is the diameter of the wheels of the motorbike
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")]; 
/// 500 is the weight of the motorbikw
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);


vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

const cli = new Cli(vehicles);
cli.startCli();
