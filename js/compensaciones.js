function calculateBinaries() {
    var inputBinaries = parseInt(document.getElementById("input-binaries").value, 10);
    var resultBinaries = document.getElementById("result-money-binaries");
    var totalToPay;

    totalToPay = parseInt(inputBinaries * 500 * 0.17 * 2800);
    resultBinaries.value = "$" + totalToPay;
}

function calculateBuy() {
    var inputBuy = parseInt(document.getElementById("input-buy").value, 10);
    var resultBuy = document.getElementById("result-money-buy");
    var totalToPay;

    totalToPay = parseInt(inputBuy * 23800);
    resultBuy.value = "$" + totalToPay;
}