$(function () {
    $("#go").on("click", function () {
        for (var i = 0; i < 17; i++) {
            if (i === 16) {
                $("#result_text").append(fibonacci(i));
            } else {
                $("#result_text").append(fibonacci(i) + ", ");
            }
        }
    });
});
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}