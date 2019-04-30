$(function () {
    $("#judge").on("click", function () {
        var num1 = parseInt($("#num1").val(), 10);
        var num3 = parseInt($("#num3").val(), 10);
        if ((2 <= num1 && 16 >= num1) && (2 <= num3 && 16 >= num3)) {
            var num2 = $("#num2").val();
            var num4 = $("#num4").val();
            compareNum(num1, num2, num3, num4);
        } else {
            $("#result_text").text("第一引数、第三引数は2~16の数値を入力してください");
        }
    });
});
//入力された基数で大小比較
function WhichBigger(num1, num2, num3, num4) {
    var x = parseInt(num2, num1);
    var y = parseInt(num4, num3);
    if (x < y) {
        $("#result_text").text(num1 + "進数の" + num2 + "<" + num3 + "進数の" + num4);
    } else if (x > y) {
        $("#result_text").text(num1 + "進数の" + num2 + ">" + num3 + "進数の" + num4);
    } else if (x === y) {
        $("#result_text").text(num1 + "進数の" + num2 + "=" + num3 + "進数の" + num4);
    }
    WhichBiggerByTenRadix(x, y);
};
//10進数で大小比較
function WhichBiggerByTenRadix(x, y) {
    var n = parseInt(x.toString(10), 10);
    var m = parseInt(y.toString(10), 10);
    if (n < m) {
        $("#result_text").append("<p>" + n + "<" + m + "</p>");
    } else if (n > m) {
        $("#result_text").append("<p>" + n + ">" + m + "</p>");
    } else if (n === m) {
        $("#result_text").append("<p>" + n + "=" + m + "</p>");
    }
}