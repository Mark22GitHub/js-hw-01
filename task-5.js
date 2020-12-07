let country = prompt("Введите вашу страну")
let cost;

if (country === null) {
    console.log('Отменено пользователем');
} else {
    let newCountry = country.toLowerCase();
    switch (newCountry) {

    case 'китай':
        cost = 100;
        alert(`Доставка в ${сountry} будет стоить ${cost} кредитов.`);
        break;
    
    case 'чили':
        cost = 250;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов.`);
        break;
    
    case 'австралия':
        cost = 170;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов.`);
        break;

    case 'индия':
        cost = 80;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов.`);
        break;
    
    case 'ямайка':
        cost = 120;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов.`);
        break;
        
        default:
        alert('В вашей стране доставка не доступна')
}
    
}

