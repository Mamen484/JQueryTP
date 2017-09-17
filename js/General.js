/* 
 * General.js
 */

/**
 * 
 * @returns {undefined}
 */
function afficherDateEtHeure() {
}


/*
 * Affichage du Sommaire
 */
function afficherSommaire() {
    var sommaire = "";
    sommaire += "<ul>";
    sommaire += "<li><a href='../html/Accueil.html'>Accueil</a>&nbsp;|&nbsp;</li>";
    sommaire += "<li><a href='../html/Inscription.html'>Inscription</a>&nbsp;|&nbsp;</li>";
    sommaire += "<li><a href='../html/Authentification.html'>Authentification</a>&nbsp;|&nbsp;</li>";
    sommaire += "<li><a href='../html/Catalogue.html'>Catalogue</a>&nbsp;|&nbsp;</li>";
    sommaire += "<li><a href='../html/Panier.html'>Panier</a>&nbsp;|&nbsp;</li>";
    sommaire += "<li><a href='../html/Boutiques.html'>Plan Boutiques</a>&nbsp;|&nbsp;</li>";
    sommaire += "<li><a href='../html/Selections.html'>Selections</a>&nbsp;|&nbsp;</li>";
    sommaire += "</ul>";

    $("#sommaire").html(sommaire);
}


/*
 * Affichage du contenu de Aside
 */
function afficherAside() {
    var aside = "";
    aside += "<ul>";
    aside += "<li><a href='https://github.com/Mamen484'>Mon githut</a></li>";
    aside += "<li><a href='https://www.linkedin.com/in/max-mendy-61a295148/'>Mon linkedin</a></li>";
    aside += "<li><a href='https://mamen.alwaysdata.net/'>Mon Portfolio</a></li>";
    aside += "</ul>";
    $("#aside").html(aside);
}


afficherSommaire();
afficherAside();

