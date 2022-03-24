export default class CurrencyService {
  static getExchangeRate(base, target, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}/${amount}
    `)
    .then(function(response) {
      return response.json();
    })
    .catch(function(error){
      return error;
    })
  }
}