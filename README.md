# Currency Exchanger

#### By Tony Froccaro

#### Currency Exchanger utilizing Javascript, Asynchrony and APIs

## Technologies Used

- JavaScript
- Asynchrony
- APIs - specifically `https://www.exchangerate-api.com/`

## Description

The Currency Exchanger accepts three user inputs - base currency, target currency, and base currency value and exchanges the base currency to the target currency value. The base currency is the starting currency we want to convert into the target currency. The amount is the amount of base currency we want to exchange. After entering three valid inputs, the values are entered as parameters into the static method getExchangeRate. The response from getExchangeRate is an object from the https://v6.exchangerate-api.com/v6/YOUR-KEY-HERE/pair/USD/GBP/10 GET call from https://www.exchangerate-api.com/. This response is then parsed and output to the DOM in the showExchangeRate function. The properties utilized from the object yielded from this API call are conversion_rate and conversion_result.

## Tests

N/A

## Setup/Installation Requirements

Environment Setup

- Download git
- Install Node.js
- Download a text editor (preferably VSCode)
- Navigate to your Desktop folder
- Make a folder to store the application files
- Navigate to https://github.com/tonyfroc/tf-currency-api
- Select code, then copy the link below "Clone"
- In terminal type:
- `git init`
- `git clone `https://github.com/tonyfroc/tf-galactic-age-calculator.git`
- `npm install` to install dependencies
- `npm run build` to run installed dependencies.

API Setup

- Navigate to `https://www.exchangerate-api.com/`
- On the bottom of the page, enter your e-mail and select "Get Free Key." An e-mail confirming your account is active will be sent to you.
- Once your account is active, log in and navigate to "API KEYS" in the left side panel.
- Create a .env file in the root directory of your project and store the API key as such: API_KEY={YOUR-API-KEY-HERE}
- Add `.env` to your `.gitignore` file and commit the `.gitignore` file.
- When referencing your API key, use this syntax: `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP/10` as an example.
- Reference the dashboard to ensure you do not exceed your alotted number of monthly free API calls. 

## Known Bugs

None at this time.

## License

_[MIT](https://opensource.org/licenses/MIT)_  
Copyright (c) 2022, Tony Froccaro
