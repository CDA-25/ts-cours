const maString: string = 'Salut';

// En typescript on évite les any
const maString2: any = null;

// le OU --> pas necessaire de mettre ||
const maString3: string | null | number = null;
console.log(maString, maString2, maString3);

// si rien n'est retourné c'est void sinon string
function nomFonction(a: string, b: number, c: string): string {
  console.log(a);
  console.log(b);
  console.log(c);
  return a;
}
nomFonction('Hey', 7, maString);

//-------------------------------------------
// interface ce n'est pas un objet, c'est un contrat

interface VoitureInterface {
  marque: string;
  modele: string;
  annee: number;
  couleur: string;
}
// avec type on ne peut pas extends mais des unions de type oui
type VoitureInterface2 = {
  marque: string;
  modele: string;
  annee: number;
  couleur: string;
};

interface NewInterface extends VoitureInterface {
  coucou: string;
}

//-------------------------------------------
// objet basic
const voiture: VoitureInterface = {
  marque: 'Renault',
  modele: 'Clio',
  annee: 2020,
  couleur: 'rouge',
};

// no usage de new
function afficherVoiture(voiture: VoitureInterface): void {
  console.log(
    `Voiture : ${voiture.marque} ${voiture.modele}, Année : ${voiture.annee}, Couleur : ${voiture.couleur}`
  );
}

/*
const mastring: string = "coucou"

function maFonction(a: string, b: number, c: string): string {
    console.log("a => ", a)
    console.log("b => ", b)
    console.log("c => ", c)
    return a
}

const name = maFonction("john", 40, mastring)

console.log("name de la fonction => ", name)

interface VoitureInterface {
    toto: string,
    marque: string,
    modele: string,
    annee: number,
    couleur: string
}

interface NewInterface extends VoitureInterface {
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
*/
