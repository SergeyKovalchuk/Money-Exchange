// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
     var coins = {};

	if (currency <= 0) { return coins;}
	if (currency > 10000) { coins.error = "You are rich, my friend! We don't have so much coins for exchange"; return coins;}
	coins.H = 0;
	coins.Q = 0;
	coins.D = 0;
	coins.N = 0;
	
	function countOfMoney(nominal, property) {
		property =currency/nominal; 
		currency == nominal ? currency = 0 : currency%=nominal;
		return property = Math.floor(property);	
	}
	
	while (currency >= 50) coins.H = countOfMoney(50,coins.H);
	while (currency >= 25) coins.Q = countOfMoney(25,coins.Q); 
	while (currency >= 10) coins.D = countOfMoney(10,coins.D);  
	while (currency >= 5)  coins.N = countOfMoney(5,coins.N); 
	if (currency >= 1) { coins.P = Math.floor(currency);}

	for (key in coins) { coins[key] == 0 ? delete coins[key] : Math.round(coins[key])}
	console.log(coins);
	return coins;
}
