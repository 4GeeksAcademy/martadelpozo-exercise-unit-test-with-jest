// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

const oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
}


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


function fromDollarToYen(dollarAmount) {
    const yenAmount = dollarAmount * oneEuroIs.USD * oneEuroIs.JPY;
    return yenAmount;
}

function fromYenToPound(yenAmount) {
    const poundAmount = yenAmount / oneEuroIs.JPY * oneEuroIs.GBP;
    return poundAmount;
}

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};




