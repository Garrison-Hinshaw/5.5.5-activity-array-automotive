//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
//extended original class so that it would include required properties
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160
        this.fuel = 10;
        this.scheduleService = false
    }
//added method for passengers
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + ' ' + this.make + ' does not have enough space!');
            }
        } else {
            console.log(this.model + ' ' + this.make + " is full");
        }
    }
   //added method for start
    start() {
        if (this.fuel > 0) {
            console.log('engine has started.');
            return this.started = true
        } else {
            console.log('no fuel');
            return this.started = false
        }
    }
    //added method for check service
    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    }

//this shows how to call from this module...
let thisCar = new Car("Mercury", "Sedan", "1965", "red", "45000");

thisCar.start()
thisCar.loadPassengers()
thisCar.stop()
thisCar.checkService()
