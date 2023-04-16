const car = {
    engine : true,
    steering : true,
    speed : "slow",
}

console.log(car);

// const sportsCar = new car(); TypeError: Car is not a constructor
const sportsCar = Object.create(car);
sportsCar.speed = "fast"
console.log(sportsCar)
