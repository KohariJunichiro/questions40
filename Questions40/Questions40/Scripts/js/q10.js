$(function () {
    $("#exchange").on("click", function () {
        var money = $("#money").val();
        if (money <= 100000) {
            Exchange(money);
        } else {
            $("#result_text").text("100,000円以下の金額を入力してください");
        }
    });
});
function Exchange(money) {
    var fiveHundreds = Math.floor(money / 500);
    var hundreds = Math.floor((money - (500 * fiveHundreds)) / 100);
    var fifty = Math.floor((money - ((500 * fiveHundreds) + (100 * hundreds))) / 50);
    var ten = Math.floor((money - ((500 * fiveHundreds) + (100 * hundreds) + (50 * fifty))) / 10);
    var error = money - ((500 * fiveHundreds) + (100 * hundreds) + (50 * fifty) + (10 * ten));
    Output(fiveHundreds, hundreds, fifty, ten, error);
}
function Output(fiveHundreds, hundreds, fifty, ten, error) {
    $("#result_text").html("<p>¥500 = " + fiveHundreds + "</p>" + 
        "<p>¥100 = " + hundreds + "</p>" +
        "<p>¥50 = " + fifty + "</p>" +
        "<p>¥10 = " + ten + "</p>" +
        "<p>ERROR = ¥" + error + "</p>");
}