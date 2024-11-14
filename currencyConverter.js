// importing the needed Modules
// Note that these will not be possible if 
// the type of the main file is not set 
// to "module".
import convertUsdToud from "./convertUsdToud.js";
import convertUsdTops from "./convertUsdTops.js";
import convertUsdTona from "./convertUsdTona.js";
import convertUsdToeo from "./convertUsdToeo.js";
import convertUsdToCs from "./convertUsdToCs.js";
import convertPdsToud from "./convertPdsToud.js";
import convertPdsTops from "./convertPdsTops.js";
import convertPdsTona from "./convertPdsTona.js";
import convertPdsToeo from "./convertPdsToeo.js";
import convertPdsTocs from "./convertPdsTocs.js";
import convertNgaToud from "./convertNgaToud.js";
import convertNgaTops from "./convertNgaTops.js";
import convertNgaTona from "./convertNgaTona.js";
import convertNgaToeo from "./convertNgaToeo.js";
import convertNgaTocs from "./convertNgaTocs.js";
import convertEuroToud from "./convertEuroToud.js";
import convertEuroTops from "./convertEurotops.js";
import convertEuroTona from "./convertEuroTona.js";
import convertEuroToeo from "./convertEuroToeo.js";
import convertEuroTocs from "./convertEuroTocs.js";
import convertCediToud from "./convertCediToud.js";
import convertCediTops from "./convertCediTops.js";
import convertCediTona from "./convertCediTona.js";
import convertCediToeo from "./convertCediToeo.js";
import convertCediTocs from "./convertCediTocs.js";
import convertUsdTocs from "./convertUsdToCs.js";

// fetching the needed elements
// using the DOM;
let currencyInput = document.getElementById("currencyInput");
let currencyfrom = document.getElementById("convertfrom");
let currencyto = document.getElementById("convertto");
let exBtn = document.getElementById("exchange-btn");
let resultDiv = document.getElementById("result");

// handling different cases where we have 
// different currencies.
// by adding event listeners to the exchange button.
exBtn.addEventListener("click", () => {
    let amountToConvert = currencyInput.value;
    let selectedCurrency = currencyfrom.value;
    let targetedCurrency = currencyto.value;

    if(selectedCurrency === "usd" && targetedCurrency === 'ud') {
       let result = convertUsdToud(amountToConvert);
       resultDiv.innerHTML = `$${amountToConvert} = $${result}`;
    } else if(selectedCurrency === "usd" && targetedCurrency === "ps") {
        let result = convertUsdTops(amountToConvert);
        resultDiv.innerHTML = `$${amountToConvert} = ${result} Pounds`;
    } else if(selectedCurrency === 'usd' && targetedCurrency === 'na') {
        let result = convertUsdTona(amountToConvert);
        resultDiv.innerHTML = `$${amountToConvert} = ${result} Naira`;
    } else if (selectedCurrency === "usd" && targetedCurrency === 'eo') {
        let result = convertUsdToeo(amountToConvert);
        resultDiv.innerHTML = `$${amountToConvert} = ${result} Euro`;
    }  else if (selectedCurrency === "usd" && targetedCurrency === 'cs') {
        let result = convertUsdTocs(amountToConvert);
        resultDiv.innerHTML = `$${amountToConvert} = ${result} Cedis`;
    }  else if (selectedCurrency === "pds" && targetedCurrency === 'ud') {
        let result = convertPdsToud(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert}Pounds = ${result} dollars`;
    } else if (selectedCurrency === "pds" && targetedCurrency === 'ud') {
        let result = convertPdsToud(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert}Pounds = ${result} dollars`;
    } else if (selectedCurrency === "pds" && targetedCurrency === 'ps') {
        let result = convertPdsTops(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert}Pounds = ${result} Pounds`;
    } else if (selectedCurrency === "pds" && targetedCurrency === 'na') {
        let result = convertPdsTona(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert}Pounds = ${result} Naira`;
    } else if (selectedCurrency === "pds" && targetedCurrency === 'eo') {
        let result = convertPdsToeo(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert}Pounds = ${result} Euro`;
    } else if (selectedCurrency === "pds" && targetedCurrency === 'cs') {
        let result = convertPdsTocs(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Pounds = ${result} Cedis`;
    } else if(selectedCurrency === "nga" && targetedCurrency === 'ud') {
        let result = convertNgaToud(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Naira = ${result} Dollars`
    } else if(selectedCurrency === "nga" && targetedCurrency === 'ps') {
        let result = convertNgaTops(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Naira = ${result} Pounds`
    } else if(selectedCurrency === "nga" && targetedCurrency === 'na') {
        let result = convertNgaTona(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Naira = ${result} Naira`;
    }else if(selectedCurrency === "nga" && targetedCurrency === 'eo') {
        let result = convertNgaToeo(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Naira = ${result} Euro`;
    } else if(selectedCurrency === "nga" && targetedCurrency === 'cs') {
        let result = convertNgaTocs(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Naira = ${result} Cedis`
    } else if(selectedCurrency === "Euro" && targetedCurrency === 'ud') {
        let result = convertEuroToud(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Euro = ${result} Dollars`
    } else if(selectedCurrency === "Euro" && targetedCurrency === 'ps') {
        let result = convertEuroTops(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Euro = ${result} Pounds`;
    } else if(selectedCurrency === "Euro" && targetedCurrency === 'na') {
        let result = convertEuroTona(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Euro = ${result} Naira`;
    } else if(selectedCurrency === "Euro" && targetedCurrency === 'eo') {
        let result = convertEuroToeo(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Euro = ${result} Euro`;
    } else if(selectedCurrency === "Euro" && targetedCurrency === 'cs') {
        let result = convertEuroTocs(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Euro = ${result} Cedis`
    } else if(selectedCurrency === "Cedi" && targetedCurrency === 'ud') {
        let result = convertCediToud(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Cedi = ${result} Dollars`
    } else if(selectedCurrency === "Cedi" && targetedCurrency === 'ps') {
        let result = convertCediTops(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Cedi = ${result} Pounds`;
    } else if(selectedCurrency === "Cedi" && targetedCurrency === 'na') {
        let result = convertCediTona(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Cedi = ${result} Naira`;
    } else if(selectedCurrency === "Cedi" && targetedCurrency === 'eo') {
        let result = convertCediToeo(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Cedi = ${result} Euro`;
    } else if(selectedCurrency === "Cedi" && targetedCurrency === 'cs') {
        let result = convertCediTocs(amountToConvert);
        resultDiv.innerHTML = `${amountToConvert} Cedi = ${result} Cedi`;       
    }
})