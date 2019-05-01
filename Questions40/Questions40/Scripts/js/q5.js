$(function () {
    $("#judge").on("click", function () {
        var timezoneName1 = $("#timezone").val();
        var timezoneName2 = $("#timezone2").val();
        var now = moment();
        var nowString = now.format("YYYY-MM-DD hh:mm");
        var nowWorld1 = moment.tz(nowString, timezoneName1);
        var nowWorld2 = moment.tz(nowString, timezoneName2);
        var hourDuration = nowWorld1.diff(nowWorld2, "hours");
        var duration = "時差は" + hourDuration + "時間です";
        $("#result_text").text(duration);
    })
})