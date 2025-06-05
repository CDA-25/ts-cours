//variable
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
interface VoitureInterface {
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

interface NewInterface extends VoitureInterface { //pour ajouter un truc a VoitureInterface ici coucou
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