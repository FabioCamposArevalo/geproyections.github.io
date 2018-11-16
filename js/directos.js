function calculateDirects() {
    console.log("called");
    var inputLeft = parseInt(document.getElementById("input-left-generations").value, 10);
    var inputRight = parseInt(document.getElementById("input-right-generations").value, 10);

    var resultPoints = document.getElementById("result-total-points-generations");
    var pointsLeft = document.getElementById("result-remained-points-generations");
    var resultMoneyPoints = document.getElementById("result-money-points-generations");
    var moneyRemainedPoints = document.getElementById("result-money-remained-generations");
    var moneyAdded = document.getElementById("result-money-added-generations");
    var moneyResult = document.getElementById("result-money-generations");
    var totalAdded = document.getElementById("result-total-added-generations");


    var totalPoints;
    var totalMoney;
    var minArm;
    var remain = 0;

    if (inputLeft < inputRight) {
        minArm = inputLeft;
        remain = inputRight - minArm;
    } else if (inputRight < inputLeft) {
        minArm = inputRight;
        remain = inputLeft - minArm;
    } else {
        minArm = inputLeft;
    }

    remain *= 500;

    totalPoints = minArm * 500;
    totalMoney = (inputLeft + inputRight) * 420000 + totalPoints * 0.17 * 2800;

    totalAdded.value = inputLeft+inputRight;
    resultMoneyPoints.value = "$" + parseInt(totalPoints * 0.17 * 2800);
    moneyRemainedPoints.value = "$" + parseInt(remain* 0.17 * 2800, 10);
    resultPoints.value = totalPoints;
    pointsLeft.value = remain;
    moneyAdded.value = "$" + (inputLeft + inputRight) * 420000;
    moneyResult.value = "$" + totalMoney;
}