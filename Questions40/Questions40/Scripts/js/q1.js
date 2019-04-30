$(function () {
    $("#judge").on("click", function () {
        var num = $("#num").val();
        if (num.match(/^[0-9]+$/)) {
            if ($("#how_radios [name=how]:checked").val() == "includes") {
                has3ver1(num);
            } else if ($("#how_radios [name=how]:checked").val() == "match") {
                has3ver2(num);
            } else if ($("#how_radios [name=how]:checked").val() == "indexOf") {
                has3ver3(num);
            } else if ($("#how_radios [name=how]:checked").val() == "search") {
                has3ver4(num);
            } else if ($("#how_radios [name=how]:checked").val() == "test") {
                has3ver5(num);
            }
        } else {
            $("#result_text").text("半角で整数を入力してください");
        }
        
    });
});
function has3ver1(num) {
    if (num.includes(3)) {
        $("#result_text").text("3が含まれています");
    } else {
        $("#result_text").text("3が含まれていません");
    }
}
function has3ver2(num) {
    if (num.match(/3/) !== null) {
        $("#result_text").text("3が含まれています");
    } else {
        $("#result_text").text("3が含まれていません");
    }
}
function has3ver3(num) {
    if (num.indexOf("3") !== -1) {
        $("#result_text").text("3が含まれています");
    } else {
        $("#result_text").text("3が含まれていません");
    }
}
function has3ver4(num) {
    if (num.search("3") !== -1) {
        $("#result_text").text("3が含まれています");
    } else {
        $("#result_text").text("3が含まれていません");
    }
}
function has3ver5(num) {
    if (/3/.test(num)) {
        $("#result_text").text("3が含まれています");
    } else {
        $("#result_text").text("3が含まれていません");
    }
}