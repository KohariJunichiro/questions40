$(function () {
    $("#tellFortunes").on("click", function () {
        var birthday = $("#birthday").val().split("/").join("");
        var result = TellFortunes(birthday);
        $("#result_text").text(result);
    });
    //誕生日占いを行う
    function TellFortunes(birthday) {
        while (!birthday.match(/[0-9]/)) {
            var birthdayNum = birthday.split("");
            var birthday = birthdayNum.reduce(function (x, y) {
                return x + y;
            });
        }        
    }
});