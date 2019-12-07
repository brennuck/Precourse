function myFunc() {
    const firstName = 'Dan';
    return firstName;
}

const firstName = myFunc();


function myFunc() {
    const firstName = 'Dan';
    return function() {
        console.log('Hi');
    };
}

const resultOfFunc = myFunc();
resultOfFunc(); // Hi


function myFunc(firstName) {
    return function(lastName) {
        console.log(firstName + ' ' + lastName);
    };
}
const resultOfFunc = myFunc('Brennon');
resultOfFunc('Nuckols'); // Brennon Nuckols


function makeMultiplier(firstNum) {
    return function(secondNum) {
        return firstNum * secondNum;
    };
}

const timesFive = makeMultiplier(5);
timesFive(100); // 500
const timesFour = makeMultiplier(4);
timesFour(100); // 400