/* 
 Inscription_V0.js
 
 */

/**
 * 
 * @returns {undefined}
 */
function init() {
    console.log("init");
    initListes();
    document.getElementById("btValider").onclick = valider;

    enPeriodeDeTests();

} /// init

/**
 * 
 * @returns {undefined}
 */
function initListes() {

    var optionsJours = "";
    for (var i = 1; i <= 31; i++) {
        optionsJours += "<option>" + i + "</option>";
    }
    document.getElementById("jours").innerHTML = optionsJours;

    var d = new Date();
    console.log(d);
    var anneeEnCours = d.getFullYear();
    console.log(anneeEnCours);

    var optionsAnnees = "";
    for (var i = 1900; i <= anneeEnCours; i++) {
        optionsAnnees += "<option>" + i + "</option>";
    }
    document.getElementById("annees").innerHTML = optionsAnnees;


    var tMois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    var optionsMois = "";
    for (var i = 0; i < tMois.length; i++) {
        optionsMois += "<option>" + tMois[i] + "</option>";
    }
    document.getElementById("mois").innerHTML = optionsMois;

    var jourCourant = d.getDate();
    var moisCourant = d.getMonth();

    document.getElementById("jours").value = jourCourant;
    document.getElementById("mois").value = tMois[moisCourant];
    document.getElementById("annees").value = anneeEnCours;

    var tVilles = new Array();
    tVilles["75000"] = "Paris";
    tVilles["69000"] = "Lyon";
    tVilles["13000"] = "Marseille";

    var optionsVilles = "<option value='0'>Sélectionnez</option>";
    for (var cle in tVilles) {
        optionsVilles += "<option value='" + cle + "'>" + tVilles[cle] + "</option>";
    }
    document.getElementById("cp").innerHTML = optionsVilles;

    var tHobbies = new Array("Théâtre", "Foot", "Cyclisme");
    var optionsHobbies = "";
    for (var i = 0; i < tHobbies.length; i++) {
        optionsHobbies += "<option>" + tHobbies[i] + "</option>";
    }
    document.getElementById("hobbies").innerHTML = optionsHobbies;
} /// initListes

/**
 * 
 * @returns {undefined}
 */
function valider() {
    console.log("valider");
    var correct = true;
    var lsMessage = "";

    /*
     Controle des email
     */
    var email = document.getElementById("email").value;
    if (!isEmail(email)) {
        correct = false;
        lsMessage += "<br>Email incorrect";
    }

    var email2 = document.getElementById("email2").value;
    if (!isEmail(email2)) {
        correct = false;
        lsMessage += "<br>Email 2 incorrect";
    }

    if (email !== email2) {
        correct = false;
        lsMessage += "<br>Les 2 Emails ne sont pas identiques";
    }

    /*
     Controle des mdp
     */
    var mdp = document.getElementById("mdp").value;
    if (!isMDPFort(mdp)) {
        correct = false;
        lsMessage += "<br>MDP incorrect";
    }
    var mdp2 = document.getElementById("mdp2").value;
    if (!isMDPFort(mdp2)) {
        correct = false;
        lsMessage += "<br>MDP 2 incorrect";
    }

    /*
     Résultat final
     */
    if (correct) {
        document.getElementById("lblMessage").innerHTML = "Jusque là tout va bien :-)";
    }
    else {
        document.getElementById("lblMessage").innerHTML = lsMessage;
    }

} /// valider

/**
 * 
 * @param {type} email
 * @returns {Boolean}
 */
function isEmail(email) {
    var er = new RegExp("^[0-9a-z._-]+@[0-9a-z._-]{2,}[.][a-z]{2,5}$", "i");
    return er.test(email);
} /// isEmail

/**
 * 
 * @param {type} mdp
 * @returns {Boolean}
 */
function isMDPFort(mdp) {
    var motifMDP = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$";
    var er = new RegExp(motifMDP);
    return er.test(mdp);
} /// isMDPFort


function enPeriodeDeTests() {
    document.getElementById("prenom").value = "Pascal";
    document.getElementById("nom").value = "Buguet";
    document.getElementById("email").value = "mamen484@gmail.com";
    document.getElementById("email2").value = "mamen484@gmail.com";
    document.getElementById("tel").value = "06-51-41-75-20";
    document.getElementById("mdp").value = "Mdp123";
    document.getElementById("mdp2").value = "Mdp123";
    document.getElementById("pseudo").value = "Mamen";

    document.getElementById("cp").value = "75000";
    document.getElementById("hobbies").value = "Tennis";
    document.getElementById("rbCadre").checked = true;

} /// enPeriodeDeTests

// -----------------
window.onload = init;
