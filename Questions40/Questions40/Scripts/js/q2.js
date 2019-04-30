$(function () {
    $("#judge").on("click", function () {
        var zeroCount = 0; var oneCount = 0;
        var twoCount = 0; var threeCount = 0;
        var fourCount = 0; var fiveCount = 0;
        var sixCount = 0; var sevenCount = 0;
        var eightCount = 0; var nineCount = 0;
        var counter = [zeroCount, oneCount, twoCount, threeCount, fourCount, fiveCount,
            sixCount, sevenCount, eightCount, nineCount];
        var input = $("#num").val();
        if (/^[0-9]+$/.test(input)) {
            var numbers = input.split("");
            counter = CountNumbers(numbers, counter);
            Output_result(counter);
        } else {
            $("#result_text").text("半角で整数を入力してください");
        }
    });
});

//数字をカウント
function CountNumbers(numbers, counter) {
    $.each(numbers, function (index, num) {
        if (num === '0') {
            counter[0]++;
        } else if (num === '1') {
            counter[1]++;
        } else if (num === '2') {
            counter[2]++;
        } else if (num === '3') {
            counter[3]++;
        } else if (num === '4') {
            counter[4]++;
        } else if (num === '5') {
            counter[5]++;
        } else if (num === '6') {
            counter[6]++;
        } else if (num === '7') {
            counter[7]++;
        } else if (num === '8') {
            counter[8]++;
        } else if (num === '9') {
            counter[9]++;
        }
    });
        return counter;
};

//結果出力
function Output_result(counter) {
    $("#result_text").html("<p>0:" + counter[0] + "件</p>" + 
        "<p>1:" + counter[1] + "件</p>" + 
        "<p>2:" + counter[2] + "件</p>" +
        "<p>3:" + counter[3] + "件</p>" + 
        "<p>4:" + counter[4] + "件</p>" + 
        "<p>5:" + counter[5] + "件</p>" + 
        "<p>6:" + counter[6] + "件</p>" + 
        "<p>7:" + counter[7] + "件</p>" + 
        "<p>8:" + counter[8] + "件</p>" + 
        "<p>9:" + counter[9] + "件</p>");
}