$(function () {
    $("#calculate").on("click", function () {
        var num = $("#num").val();
        Factorical(num);
    });
});
function Factorical(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    $("#result_text").text(result);
}