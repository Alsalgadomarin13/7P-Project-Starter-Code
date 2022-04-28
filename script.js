$("button").click(function() {
    let variable1 = $(".1").val();
    let variable2 = $(".2").val();
    let variable3 = $(".3").val();

    let variable4 = variable3 * 365 * 14;
    $(".fortune-display").append(variable1 + " you will shower " + variable4 + " times by 2034.");
console.log(variable1,variable2,variable3);
});
    
