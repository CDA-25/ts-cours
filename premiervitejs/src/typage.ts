const mastring: string = "coucou"

let mastring2: string|null = null
mastring2 = "coucou2"

function maFonction(a: string, b: number, c: string): string { //on a mis string pour a parce que c'est une string et on a mis b parce que c'est un number 
// mais on peut mettre void si y'a rien
    console.log("a => ", a)
    console.log("b => ", b)
    console.log("c => ", c)
    return a
}

const name = maFonction("john", 40, mastring)

console.log("name de la fonction =>", name)

type VoitureInterface = {
        marque: string, 
        modele: string,
        annee: number,
        couleur: string

}

const voiture: VoitureInterface = {
    marque: "Renault",
    modele: "Clio",
    annee: 2020,
    couleur: "rouge"
}

function afficherVoiture(voiture: VoitureInterface): void {
    console.log(`Voiture : ${voiture.marque} ${voiture.modele}, Année : ${voiture.annee}, Couleur : ${voiture.couleur}`);
}

afficherVoiture(voiture)