console.log('---ATM---');

let moneyToWithdraw = parseInt(prompt('Enter how much money you want to withdraw :'));
let balance = 1000000; 


console.log(withdrawMoney());

function withdrawMoney() {
    if (isNaN(moneyToWithdraw)) {
        return 'Invalid amount!';
    } else if (balance < moneyToWithdraw) {
        return 'Not enough money!';
    } else {
        balance -= moneyToWithdraw;
        return `You have withdrawn: ${moneyToWithdraw}$, money left on account ${balance}$.`;
    }
}

