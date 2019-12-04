const example = {}; // ojbect

const brennon = {
    username: 'brennuck', // key && property
    password: 'PassW2933', // keys have to be unique
    learningJavaScript: true,
    favoriteNumber: 7,
    somethingFalse: false,
    anArray: [],
    sayHiMethod: function() { // method
        return "Hi Everyone!";
    },
    thisExample: function() {
        return this.username;
    },
};
// dot notation
brennon.username; // brennuck

// bracket notation
const uname = 'password';

brennon[uname]; // PassW2933


brennon.username = 'brenista';
brennon.city = 'Lehi'; // will add to the end of the object


delete brennon.somethingFalse; // deletes the key


brennon.sayHiMethod(); // Hi Everyone!


for(let key in brennon){
    console.log(key) // username, password, learningJavascript, favoriteNumber, somethingFalse, anArray, sayHiMethod
    console.log(brennon[key]) // brennuck, PassW2933, true, 7, false, [], Hi Everyone!
    console.log(key, brennon[key]) // username brennuck, password PassW2933...
}

