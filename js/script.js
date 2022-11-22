
{
    const calculateResult = (amount, currency) => {
        const EUR = 4.69;
        const USD = 4.50;
        const GBP = 5.35;
        const CHF = 4.78;
        const UAH = 0.12;

        switch (currency) {

            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "GBP":
                return amount / GBP;

            case "CHF":
                return amount / CHF;

            case "UAH":
                return amount / UAH;
        }
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency)

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}
