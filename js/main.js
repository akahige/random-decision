var headTailsMapping = {
    0: "Head",
    1: "Tails"
};


$(function() {
    $("#generate").click( function () {
        var headTails = headTailsMapping[Math.round(Math.random())];
        var numbers = [];
        var number = 0;

        $("#head-tails").val(headTails);

        while (numbers.length < 5) {
            number = Math.floor(Math.random()*20) + 1;

            if (numbers.indexOf(number) === -1) {
                numbers.push(number);
            }
        }

        $("#number").val(numbers.join());
    })
});



