var onePiece = ["luffy", "zoro", "ussop", "nami", "sanji", "chopper", "robin", "franky", "brook", "jinbei"];
var i = 0;

$(document).ready(function anime(){
    $(".anime").fadeOut(2000, function(){
        $(".anime").attr("src", "images/" + onePiece[i] + ".png");
        $(".anime").fadeIn(2000);
        i++;
        anime();
        if(i === 10) {
            return i = 0;
        }
    });
});

$("a.sub-header").mouseover(function(){
    $(this).css("color", "crimson");
}).mouseout(function(){
    $(this).css("color", "black");
});