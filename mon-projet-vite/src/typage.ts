const mastring: string = "coucou" // on met le type de la variable avant le nom de la variable

function maFonction(a: string, b: number, c: string): string {
    console.log("a => ", a)
    console.log("b => ", b)
    console.log("c => ", c)
    return a
}

const name = maFonction("john", 40, mastring)

console.log("name de la fonction => ", name)




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

function afficherVoiture(voiture: VoitureInterface):void {  //void veux dire que ca ne retourne rien
    console.log(`Voiture : ${voiture.marque} ${voiture.modele}, Année : ${voiture.annee}, Couleur : ${voiture.couleur}`);
}