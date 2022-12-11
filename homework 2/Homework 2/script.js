console.log('Calculate Dog Years!');

let typeInput = prompt('Enter dog or human years :');
let input = parseInt(prompt('Enter years :'));

if (isNaN(input)) {
    console.log('You entered wrong data!');
    
}
else {
    if (typeInput.toLowerCase() === "dog") {
        console.log(`Your dog is : ${humanToDogYears(input)} age old in human ages!`);
    }
    else if (typeInput.toLowerCase() === "human") {
        console.log(`You have : ${dogToHumanYears(input)} dog year.`);
    }
    else {
        console.log('You entered wrong data!');
    }
}

function humanToDogYears() {
    let dogYears = input * 7;
    return dogYears;
}

function dogToHumanYears() {
    let humanYears = 7 / input;
    return humanYears;
}