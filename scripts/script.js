/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector (".zoneScore span")
    let affichageScore = `${score} / ${nbMotsProposes}`
    
    spanScore.innerText = affichageScore
}

 function afficherProposition(proposition) {
        let zoneProposition = document.querySelector(".zoneProposition")
        zoneProposition.innerText = proposition

    }




/**
 * Cette fonction lance le jeu. 
 */
function lancerJeu() {
    
    let i = 0
    let score = 0
    let nbMotsProposes = 0

    let btnValiderMot = document.getElementById ("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition (listeMots [i])
    btnValiderMot.addEventListener ("click", () => {
        console.log (inputEcriture.value) ;
        i++
        inputEcriture.value = ''
        if (listeMots[i] === undefined) {
            afficherProposition ("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }

    })

    
    

    afficherResultat(score, nbMotsProposes)
}