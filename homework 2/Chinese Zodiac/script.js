console.log('Enter your year of birth and find out about your Chinese zodiac sign.');

let input = parseInt(prompt('Enter a birth year:'));

console.log('Your birth year is', input);

function calculate() {
    let result = (input - 4) %12;
    return result;
}

switch (calculate()) {
    case 0:
        console.log('Your Chinese Zodiac is Rat!');
        break;
    case 1:
        console.log('Your Chinese Zodiac is Ox!');
        break;
    case 2:
        console.log('Your Chinese Zodiac is Tiger!');
        break;
    case 3:
        console.log('Your Chinese Zodiac is Rabbit!');
        break;
    case 4:
        console.log('Your Chinese Zodiac is Dragon!');
        break;
    case 5:
        console.log('Your Chinese Zodiac is Snake!');
        break;
    case 6:
        console.log('Your Chinese Zodiac is Horse!');
        break;
    case 7:
        console.log('Your Chinese Zodiac is Goat!');
        break;
    case 8:
        console.log('Your Chinese Zodiac is Monkey!');
        break;
    case 9:
        console.log('Your Chinese Zodiac is Rooster!');
        break;
    case 10:
        console.log('Your Chinese Zodiac is Dog!');
        break;
    case 11:
        console.log('Your Chinese Zodiac is Pig!');
        break;
    default :
        console.log('You entered wrong data!')
        break;
}