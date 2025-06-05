const mastring : string = "coucou" 
let maString2 : string | null = null
maString2 = "coucou2"
//---------------------------------------------------------------------------------------------------
function maFonction(a: string, b: number, c: string): string {
    console.log(a)
    console.log(b)
    return a 
}

maFonction("john", 40, mastring);

const name = maFonction("john", 40, mastring)

console.log("name de la fonction =>", name)
//--------------------------------------------------------------------------------------------
type VoitureInterfacee = {
    marque: string,
    modele: string,
    annee: number,
    couleur: string
}

interface VoitureInterface {
    marque: string,
    modele: string,
    annee: number,
    couleur: string
}

interface NewInterface extends VoitureInterface {
    coucou: string,
}


const voiture: VoitureInterface = {
    marque: "Renault",
    modele: "Clio",
    annee: 2020,
    couleur: "rouge"
}

function afficherVoiture(
    voiture: VoitureInterface): void {
        console.log(`voiture : ${voiture.marque} ${voiture.modele}, annee : ${voiture.annee} ${voiture.couleur}`)
}

afficherVoiture(voiture)
