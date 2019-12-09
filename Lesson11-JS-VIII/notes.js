const firstName = "Dan";
const myFunc = function() {
    const num = 42;
    return num;
}
const num = myFunc();
num + 10; //52



for(let i = 1; i < 11; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

function loopFiveTimes(num) {
    if(num > 5){
        return;
    }
    loopFiveTimes(num + 1);
    return;
}

loopFiveTimes(1) // 1 2 3 4 5



let sum = 0

function addItUp(i) {
    if(i > 10){
        return sum;
    }
    sum = sum + i
    return addItUp(i + 1);
}

addItUp(1) // 55