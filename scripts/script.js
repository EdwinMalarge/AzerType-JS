
function choisirPhrasesOuMots () {
    let choix = prompt ("Avec quellle liste voulez-vous jouer : 'mots' ou 'phrases")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt ("Avec quellle liste voulez-vous jouer : 'mots' ou 'phrases")
    }
    return choix
}


function lancerBoucleDeJeu (listePropositions){
    let score = 0
    for (let i=0;i<listePropositions.length;i++) {
        motUtilisateur = prompt("Entrez le mot: " + listePropositions [i])
        if (motUtilisateur === listePropositions [i]){
            score++
            } 
        }
        return score
}

function afficherResultat (score, nbMotsProposes) {
    console.log ("Votre score est de " +score+" sur "+ nbMotsProposes )
}


function lancerjeu () {
    let score = 0
    let choix = choisirPhrasesOuMots ()
    let nbMotsProposes
    if (choix === "mots") {
        score = lancerBoucleDeJeu (listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu (listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat (score, nbMotsProposes)
}
