$(function () {
    $("#judge").on("click", function () {
        var timezoneName = $("#timezone").val();
        var now = moment();
        var nowString = now.format("YYYY-MM-DD hh:mm");
        var nowWorld = moment.tz(nowString, timezoneName);
        $("#result_text").text(nowWorld._d);
    })
})