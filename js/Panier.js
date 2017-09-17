/*
 * Panier.js
 */

var lsCouvertures = "";
var lsTitres = "";
var i = 0;

// ------------
function init() {

    $(".dropAutorise").draggable({
        revert: true,
        zIndex: 1000,
        opacity: 0.7
    });

    $("#panier").droppable({
        accept: ".dropAutorise",
        tolerance: "intersect",
        drop: function(evenement, donnees) {
            console.log(donnees);
            /*
             * SOLUTION FACILE MAIS "BRUTALE" avec concatenation
             */
            var lsSRC = $(donnees.draggable).attr("src");
            var lsCouverture = "<img src='" + lsSRC + "' alt='Couverture' width='50' class='dropAutorise' />";
            lsCouvertures += lsCouverture + "&nbsp;";
            $("#contenuDuPanier").html(lsCouvertures);

            /*
             * SOLUTION BASIQUE AVEC DOM !!!
             */

            // La source de l'image draguée
            console.log($(donnees.draggable).attr("src"));
//            var paragraphe = $("<p>");
//            var image = $("<img>");
//            image.attr("src", $(donnees.draggable).attr("src"));
//            image.attr("width", 50);
//            image.attr("alt", "Couverture");
//            image.attr("class", "dropAutorise ui-draggable ui-draggable-handle");
//            $(paragraphe).append(image);
//            //img.style("position", "relative");
//            $("#contenuDuPanier").append(paragraphe);



            /*
             Vers la <table>
             */
            var tr = $("<tr>");
            var td = $("<td>");
            i++;
            td.html(i);
            tr.append(td);
            console.log(new Date());
            $("#bodyTable").append(tr);
            /*
             * AUTRE SOLUTION ... muy elegante !
             */
            // On clone l'image
//                            var image = $(donnees.draggable[0]);
//                            // LA CLE !!!
//                            image.css("position", "initial");
//                            image.clone(false).appendTo("#contenuDuPanier");

            /*
             * Pour un cookie !
             */
            var lsTitre = $(donnees.draggable).attr("title");
            lsTitres += lsTitre + "#";
            $.cookie('panier', lsTitres);
            console.log(lsTitres);
        }
    });


    $("#corbeille").droppable({
        accept: ".dropAutorise",
        tolerance: "intersect",
        drop: function(evenement, donnees) {
//                            console.log(donnees);
//                            /*
//                             * SOLUTION FACILE MAIS "BRUTALE" avec concatenation
//                             */
//                            var lsSRC = $(donnees.draggable).attr("src");
//                            var lsCouverture = "<img src='" + lsSRC + "' alt='Couverture' width='50' />";
//                            lsCouvertures += lsCouverture + "&nbsp;";
//                            $("#contenuDuPanier").html(lsCouvertures);

            /*
             * SOLUTION BASIQUE AVEC DOM !!!
             */

            // La source de l'image draguée
//                            console.log($(donnees.draggable).attr("src"));
//                            var img = $("<img>");
//                            img.attr("src", $(donnees.draggable).attr("src"));
//                            img.attr("width", 50);
//                            $("#contenuDuPanier").append(img);

            /*
             * AUTRE SOLUTION ... muy elegante !
             */
            // On clone l'image
//                            var image = $(donnees.draggable[0]);
//                            // LA CLE !!!
//                            image.css("position", "initial");
//                            image.clone(false).appendTo("#contenuDuPanier");

            /*
             * Pour un cookie !
             */
//                            var lsTitre = $(donnees.draggable).attr("title");
//                            lsTitres += lsTitre + "#";
//                            $.cookie('panier', lsTitres);
//                            console.log(lsTitres);
        }
    });

} /// init

// --------------------
$(document).ready(init);


