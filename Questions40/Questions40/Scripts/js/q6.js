$(function(){
    $("#judge").on("click", function () {
        var numbers = $("#num").val().split(",");
        $.each(numbers, function (index, num) {
            for (var i = 0; i < num.length; i++) {
                if (num.indexOf(i) > numbers[i + 1].indexOf(i)) {
                    numbers[i] = numbers[i + 1];
                }
            }
        })
        $("#result_text").text(numbers[0]);
        for (var i = 1; i < num.length; i++) {
            $("#result_text").append(numbers[i]);
        }
    })
})