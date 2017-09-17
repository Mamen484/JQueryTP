function init() {
    var surgissante = $("#surgissante");
                var gauche = $("#surgissante").css("left");
                console.log(gauche);
                console.log(gauche + 1);

                var position = $("#surgissante").position();
                console.log("x : " + position.left + " – y : " + position.top);
                
                $("#surgissante").css("left", "500px");

    $("#surgissante").animate({left: 500}, 3000).animate({top: 120}, 1000).animate({left: 10}, 3000).animate({top: 450}, 3000).hide(1000);
    $(".textes").animate({top: 200}, 6000).animate({left: 600}, 1000).animate({top: 0}, 3000).animate({left: 5}, 3000);

    $("#imgAccueil").animate({width : '300px'}, 2000).animate({left: '250px', opacity: '0.5', height: '150px', width: '150px'});

    $("#croixSurgissante").click(function() {
        $("#surgissante").hide();
    });

}

window.onload = init;
