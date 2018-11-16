function calculateGenerations() {
    var inputGeneration = [];
    inputGeneration[0] = parseInt(document.getElementById("input-generation-1").value, 10);
    inputGeneration[1] = parseInt(document.getElementById("input-generation-2").value, 10);
    inputGeneration[2] = parseInt(document.getElementById("input-generation-3").value, 10);
    inputGeneration[3] = parseInt(document.getElementById("input-generation-4").value, 10);
    inputGeneration[4] = parseInt(document.getElementById("input-generation-5").value, 10);

    for (i in inputGeneration) {
        if (isNaN(inputGeneration[i])) {
            inputGeneration[i] = 0;
        }
    }
    var totalGeneration1 = document.getElementById("result-money-generations-1");
    var totalGeneration2 = document.getElementById("result-money-generations-2");
    var totalGeneration3 = document.getElementById("result-money-generations-3");
    var totalGeneration4 = document.getElementById("result-money-generations-4");
    var totalGeneration5 = document.getElementById("result-money-generations-5");
    var totalAdded = document.getElementById("result-total-money-generations-2");

    var totalEarned;
    var totalAdded;

    totalEarned = inputGeneration[0] * 420000 + (inputGeneration[1] + inputGeneration[2] + inputGeneration[3]) * 56000 + inputGeneration[4] * 112000;

    totalAdded.value = "$" + totalEarned;
    totalGeneration1.value = "$" + inputGeneration[0] * 420000;
    totalGeneration2.value = "$" + inputGeneration[1] * 560000;
    totalGeneration3.value = "$" + inputGeneration[2] * 560000;
    totalGeneration4.value = "$" + inputGeneration[3] * 560000;
    totalGeneration5.value = "$" + inputGeneration[4] * 1120000;
}