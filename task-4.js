let credits = 23580;
const pricePerDroid = 3000;

let message = Number(prompt("Какое количество дроидов Вы хотите приобрести?"));

let totalPrice;
let balance;

if (message === 0) {
    console.log('Отменено пользователем!')
} else {
    totalPrice = pricePerDroid * message;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        balance = credits - totalPrice;
        alert(`Вы купили ${message} дроидов, на счету осталось ${balance} кредитов.`)
    }
}
