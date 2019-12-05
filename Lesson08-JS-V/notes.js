const brenUser = {
    username: 'bren.nuck',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 43,
    sayHiMethod: function() {
        return this.username + ' says hi!';
    },
};


function User(name, pw, lj, favNum) {
    // create new object and give it the name 'this'
    // this = {};
    // User.prototype = {}

    this.username = name;
    this.password = pw;
    this.lovesJavascript = lj;
    this.favoriteNumber = favNum;
    this.sayHiMethod = function() {
        return this.username + ' says Hi!';
    };
    // returns the this object
}

User.prototype.sayHiMethod = function() { // works the same as this.sayHiMethod above
    return this.username + ' says Hi!';
};


const bren = new User('bren.nuck', 'abc123', true, 43)

const loser = new User('hate.code', 'yada', false, 0)

console.log(bren) //username: 'bren.nuck',
                    //password: 'abc123',
                    // lovesJavascript: true,
                    // favoriteNumber: 43,

console.log(bren.sayHiMethod()); // bren.nuck says Hi!


let something = [1, 2, 3]
something.push(4);
console.log(something); // [1, 2, 3, 4]