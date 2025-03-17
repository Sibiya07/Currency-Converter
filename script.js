function convert() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let amt = parseFloat(document.getElementById("amt").value);
    let result = document.getElementById("result");

    if (isNaN(amt)) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    let rates = {
        INR: { USD: 0.012, JPY: 1.64, AUD: 0.019 },
        USD: { INR: 83.46, JPY: 136.89, AUD: 1.59 },
        JPY: { INR: 0.61, USD: 0.0073, AUD: 0.012 },
        AUD: { INR: 53.14, USD: 0.63, JPY: 83.41 }
    };

    if (from === to) {
        result.innerHTML = "Same currency selected.";
    } else {
        let converted = amt * rates[from][to];
        result.innerHTML = `${amt} ${from} = ${converted.toFixed(2)} ${to}`;
    }
}
