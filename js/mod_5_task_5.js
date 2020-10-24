class Car {
    'use strict'
 // Write code under this line
    static getSpecs (car) {
      return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    }
    constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;    
    }
    get price() {
        return this._price
    }
    set price(value) {
        this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value) {
        const futureSpeed = this.speed + value;
        this.speed = this.maxSpeed >= futureSpeed ? futureSpeed : this.maxSpeed;
    }
    decelerate(value) {
        const futureSpeed = this.speed - value;
        this.speed = 0 <= futureSpeed ? futureSpeed : 0;
    }
    drive(hours) {
        this.distance += this.isOn ? hours * this.speed : 0;  
    }
}


const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
