const studentNames = ['Steve', 'Dan', 'Helga', 'Jim', 'Maria'];

studentNames[studentNames.length - 1]; // Maria // Last item in array
studentNames.push('Raj'); // add to the end of array
studentNames.pop(); // removes the last item on the array
studentNames.shift(); // remove the first item off the array in the front
studentNames.unshift('Rod', ); // adds name to front of list

for(let i = 0; i < 10; i++) {
    studentNames[i] // Steve Dan Helga Jim Maria
    console.log(i) //  0 1 2 3 4 5 6 7 8 9
}

for(let i = 0; i < studentNames.length; i++) { // prints all students names no matter how many
    console.log(studentNames[i])
}

function addsNumbers() {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

addsNumbers('a', 'b', 'c'); // a b c