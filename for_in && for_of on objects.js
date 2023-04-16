const car = {
    engine : true,
    steering : true,
    speed : "slow",
}

console.log(car);

// const sportsCar = new car(); TypeError: Car is not a constructor
const sportsCar = Object.create(car);
console.log(sportsCar);
sportsCar.price = 5000000;
sportsCar.speed = "slow"
console.log(sportsCar);


// for in....
for(var prop in sportsCar){
    console.log(prop, " ", sportsCar[prop]);
}
// This will give the keys of sportsCar and it's prototype (car)

// for of...
for(var prop of Object.keys(sportsCar)){
    console.log(prop, " ", sportsCar[prop]);
}
// This will only give the keys of the sportsCar Object
