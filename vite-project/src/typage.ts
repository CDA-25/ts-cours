// Déclaration d'une constante de type string avec la valeur "coucou"
const mastring: string = "coucou"

// Déclaration d'une variable pouvant être soit une string, soit null
let mastring2: string | null = null

// On assigne une nouvelle valeur de type string à la variable mastring2
mastring2 = "coucou2"

// Déclaration d'une fonction prenant 3 paramètres : 
// a de type string, b de type number, et c de type string.
// Elle retourne une valeur de type string.
function maFonction(a: string, b: number, c: string): string {
    console.log("a => ", a)  // Affiche la valeur de a
    console.log("b => ", b)  // Affiche la valeur de b
    console.log("c => ", c)  // Affiche la valeur de c
    return a                // Retourne le paramètre a
}

// Appel de la fonction maFonction avec les arguments :
// "John" (string), 40 (number), et mastring (qui vaut "coucou")
const name = maFonction("John", 40, mastring)

// Affiche le résultat retourné par la fonction maFonction
console.log("name de la fonction => ", name)


// Définition d'un type (interface) représentant une voiture
type VoitureInterface = {
    marque: string,  // La marque de la voiture (ex: "Renault")
    modele: string,  // Le modèle (ex: "Clio")
    annee: number,   // L'année de fabrication (ex: 2020)
    couleur: string  // La couleur (ex: "rouge")
}

// Déclaration d'une constante voiture respectant l'interface VoitureInterface
const voiture: VoitureInterface = {
    marque: "Renault",
    modele: "Clio",
    annee: 2020,
    couleur: "rouge"
}

// Fonction qui prend un objet voiture (de type VoitureInterface)
// et affiche ses informations dans une phrase formatée
function afficherVoiture(voiture: VoitureInterface): void {
    console.log(`Voiture : ${voiture.marque} ${voiture.modele}, Année : ${voiture.annee}, Couleur : ${voiture.couleur}`);
}

// Appel de la fonction pour afficher les informations de la voiture
afficherVoiture(voiture);
