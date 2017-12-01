var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var headOrTails = function () {
    return randomInt(0, 1) ? "Tails" : "Head";
};

$(function() {
    $("#generate").click( function () {
        $("#head-tails").val(headOrTails());
        $("#number").val(randomInt(1, 20));
    })
});
