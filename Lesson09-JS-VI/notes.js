function saysHelloToUser(user) {
    return 'Hello ' + user + '!';
}

function saysGoodbyeToUser(user) {
    return 'Goodbye ' + user + '!';
}

saysHelloToUser("Dan") // Hello Dan!
saysGoodbyeToUser("Dan") // Goodbye Dan!

function createGreeting(user, cb) {
    return cb(user);
}

createGreeting('Dan', saysHelloToUser) // Hello Dan!


const cars = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

function printCars(car) {
    console.log(car + 'is a car brand')
}

printCars('Ford')

for(let i = 0; i < cars.length; i++) {
    printCars(cars[i])
}

// cars.forEach(printCar); === for(let i = 0; i < cars.length; i++) {
//                                 printCars(cars[i])
//                             }

cars.forEach(printCars);





let newArr = [];
for(let i = 0; i < cars.length; i++) {
    newArr.push(printCars(cars[i]))
}

// const newArr = cars.map(printCars) === let newArr = [];
//                                         for(let i = 0; i < cars.length; i++) {
//                                             newArr.push(printCars(cars[i]))
//                                         }

const newArr = cars.map(printCars);


// function map(arr, cb){
//     let newArr = [];
//     for(let i = 0; i < cars.length; i++){
//         let mappedItem = cb(cars[i]);
//         newArr.push(mappedItem);
//     }
//     return newArr
// }


const nums = [1, 2, 3, 4, 5];

let sum = 0;
for(let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
}

console.log(sum); // 15


function sumFunc(currentSum, number){
    return currentSum + number
}

let sum = 0;
for(let i = 0; i < nums.length; i++){
    sum = sumFunc(sum, nums[i]);
}

console.log(sum); // 15


const sum = nums.reduce(sumFunc);

console.log(sum); // 15


const sum = nums.reduce(function(accumulator, item) {
    return accumulator + item
});

console.log(sum); // 15



const words = ['Hi,', 'my', 'name', 'is', 'Dan'];

const sum = words.reduce(function(accumulator, item){
    return accumulator + ' ' + item;
});

console.log(sum) // Hi, my name is Dan