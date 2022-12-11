console.log('Type of parameter');

let obj = parametarType({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"});
let bool = parametarType(true);
let num = parametarType(23);
let str = parametarType('John');
let und = parametarType(undefined);

function parametarType(input) {
    let inputType = typeof (input);
    console.log(inputType);
    return inputType;
}

