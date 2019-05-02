$(function () {
    $("#judge").on("click", function () {
        var num = $("#num").val();
        $("#result_text").text("");
        for (var i = 1; i < num; i++) {
            var counter = 0;
            for (var j = 1; j <= i; j++) {
                //割り切れる数をカウント
                if (i % j === 0) {
                    counter++;
                }
            }
            //割り切れる数が1と自分自身の2つだけなら素数
            if (counter === 2) {
                $("#result_text").append(" ", i);
            }
        }
    })
})