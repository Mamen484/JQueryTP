/* 
 * Boutiques.js
 * Geolocalisation
 */

var latitude;
var longitude;
var tCoordonnees;
var carte;

/**
 * 
 * @returns {undefined}
 */
function init() {

    document.getElementById("lblMessage").innerHTML = "";

    tCoordonnees = new Array();
    tCoordonnees["Nation Diffusion"] = "48.8490067;2.39262680000002";
    tCoordonnees["Page 189"] = "48.8505184;2.3817123";
    tCoordonnees["L arbre a Lettres"] = "48.8518762;2.37345719999996";
    tCoordonnees["La Griffe Noire"] = "48.8095657;2.47142689999998";
    tCoordonnees["Librairie Joyen"] = "48.7900794;2.46552859999997";

    lblMessage = document.getElementById("lblMessage");

    // --- GEOLOCALISATION HTML5
    if (navigator.geolocation) {
        // --- Demande de la position
        // --- Cette methode prend en parametre
        // --- une fonction de callback qu'elle va appeler
        // --- en lui fournissant le parametre position contenant les coordonnees.
        navigator.geolocation.getCurrentPosition(obtenirLatEtLongFromCapteur, echec, {maximumAge: 6000000, timeout: 10000}); // 10 minutes
    }
    else {
        lblMessage.innerHTML = "Votre navigateur ne gère pas la géolocalisation";
    }
} /// init

// ---------------------------------
function obtenirLatEtLongFromCapteur(position) {
    // --- Latitude
    latitude = position.coords.latitude;
    // --- Longitude
    longitude = position.coords.longitude;

    afficherCarte();
} /// obtenirLatEtLongFromCapteur

// -----------
function echec(erreur) {

    switch (erreur.code) {

        case erreur.TIMEOUT:
            // --- Acquisition d'une nouvelle position.
            navigator.geolocation.getCurrentPosition(obtenirLatEtLongFromCapteur, echec);
            break;

        default:
            lblMessage.innerHTML = "Echec de l'obtention de coordonnées";
            break;
    }
    ;
} /// echec

// -------------------
function afficherCarte() {
    // --- Affiche une carte a latitude, longitude, zoom (De 1 a 20)
    var coordonnees = new google.maps.LatLng(latitude, longitude);

    // --- Les options
    var options = {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        center: coordonnees
    };

    // --- La carte
    carte = new google.maps.Map(document.getElementById("divMap"), options);

    // --- Un marqueur
    var marqueur = new google.maps.Marker({
        map: carte,
        icon: "../images/vous_etes_ici_rouge_24_24.png", // marqueur special
        position: coordonnees
    });
    
    afficherMarqueurs();
    
} /// afficherCarte

/**
 * 
 * @returns {undefined}
 */
function afficherMarqueurs() {
    // --- On ajoute les marqueurs
    for (var cle in tCoordonnees) {

        console.log(cle);

        var t = tCoordonnees[cle].split(";");

        var latitude = t[0];
        var longitude = t[1];

        console.log(latitude);
        console.log(longitude);

        var coordonnees = new google.maps.LatLng(latitude, longitude);
        new google.maps.Marker({
            map: carte,
            position: coordonnees
        });
    }

} /// afficherMarqueurs

// ----------
window.onload = init;
