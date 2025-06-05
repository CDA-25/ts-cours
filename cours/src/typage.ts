//variable, le : string c'est pour typer pour être sur qu'il renvoi bien une string
const maString: string = "coucou";


//fonction
function maFonction(a: string, b: number, c: string): string {
  console.log("a => ", a);
  console.log("b => ", b);
  console.log("c => ", c);
  return a;
}
const name: string = maFonction("John", 40, maString);
console.log("name de la fonction => ", name);


//object basique
interface VoitureInterface { //enfaite c'est une sorte de contrat, genre il vérifie que c'est bien de type string, number etc...
    toto: string,
    marque: string,
    modele: string,
    annee: number,
    couleur: string
}
/* ou 
type VoitureInterface = {
    toto: string,
    marque: string,
    modele: string,
    annee: number,
    couleur: string
} */

interface NewInterface extends VoitureInterface { //pour ajouter un truc a VoitureInterface ici c'est coucou qui sera donc de type string
    coucou: string
}

const voiture: NewInterface = {
    coucou: "coucou",
    toto: "toto",
    marque: "Renault",
    modele: "Clio",
    annee: 2020,
    couleur: "rouge"
}

function afficherVoiture(voiture: VoitureInterface): void {
    console.log(`Voiture : ${voiture.toto} ${voiture.marque} ${voiture.modele}, Année : ${voiture.annee}, Couleur : ${voiture.couleur}`);
}

afficherVoiture(voiture)