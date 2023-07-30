
const listeMots = ["Cachalots","Pétunia","Serviette"]
let score = 0



let motUtilisateur = prompt("Entrez le mot: " + listeMots [0] )

for (i=0;i<listeMots.length;i++) {

    if (motUtilisateur === listeMots [i]){
        score++
        console.log ("Bien joué !")
    } else {
        console.log ("Réessayer")
        motUtilisateur = prompt ("Entrez le mot: " + listeMots [i])
    }
}
console.log (score)