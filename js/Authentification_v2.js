/* 
 * Authentification_v2.js
 */

var identifiant;
var mdp;

/**
 * 
 * @returns {undefined}
 */
function init() {
    console.log("init");

    $("#btValider").on("click", valider);
} /// init

/**
 * 
 * @returns {undefined}
 */
function valider() {
    console.log("valider authentification");
    identifiant = $("#identifiant").val();
    mdp = $("#mdp").val();

    if (identifiant !== "" && mdp !== "") {
        requeterAJAX();
    }
    else {
        $("#lblMessage").html("Les identifiant et mots de passe sont obligatoires");
    }
} /// valider


/**
 * 
 * @returns {undefined}
 */
function requeterAJAX() {
    console.log("requeterAJAX");

    /**
     * 
     * @type @exp;$@call;post
     */
    var jqXHR = $.post(
            "../controls/Routes.php",
            {identifiant: identifiant,
                mdp: mdp,
                action: "authentification"
            },
    "json"
            );
    /**
     * 
     */
    jqXHR.done(function(donnees, statut, xhr) {
        console.log("done, donnees");
        console.log(donnees);
        donnees = JSON.parse(donnees);
        console.log(donnees.message);
        console.log("done, statut");
        console.log(statut);
        console.log("done, xhr");
        console.log(xhr);
//        donnees = donnees.trim();
        //console.log("*" + donnees + "*");
        var lsMessage = "";
        if (donnees.message === 1) {
            lsMessage = "Authentification réussie";
        } else {
            if (donnees.message === 0) {
                lsMessage = "Authentification ratée";
            } else {
                lsMessage = "Authentification ratée - Erreur système";
            }
        }

        $("#lblMessage").html(lsMessage);
    });

    /**
     * 
     */
    jqXHR.fail(function(xhr, statut, erreur) {
        console.log("fail, xhr");
        console.log(xhr);
        console.log("fail, statut");
        console.log(statut);
        console.log("fail, erreur");
        console.log(erreur);
        var lsTexte = xhr.status + ":" + xhr.statusText;
        $("#lblMessage").html(lsTexte);
    });
} /// requeterAJAX

// --------------------
$(document).ready(init);
