const url = 'https://the-love-calculator.p.rapidapi.com/love-calculator?fname=oliver%20m&sname=chloe%20p';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3a254cf212mshe38089abc037125p1152a4jsnbc3e8c061d87',
		'x-rapidapi-host': 'the-love-calculator.p.rapidapi.com'
	}
};
async function fetchData(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}