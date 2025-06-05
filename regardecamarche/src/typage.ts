//On n'oublie pas, pour lancer un projet vite.js, on écrit dans le terminal "npm create vite@latest", puis "npm i" pour installer toutes les dépendances nécessaires

//On déclare le type après la variable avec : de cette manière "nom_de_la_variable: type_de_la_variable = valeur_de_la_variable"
const mastring: string = "OH PUTAIN LE POTEAU DU BROZER"

//Si la variable est initialement vide, on doit quand même mettre le type ou null avec un OU, afin de rentrer une valeur plus tard, de cette manière :
let mastring2: string|null = null

mastring2 = "wow ça a changé !"

//Pour les fonctions, on déclare les types des arguments mais aussi le type de la valeur de retour de la fonction, de cette manière :
function maFonction(a: string, b:number, c:string): string {
    console.log("a => ", a)
    console.log("b => ", b)
    console.log("c => ", c)
    return a
}

const name = maFonction("Les centimètres de Luka :", 35, mastring)
console.log("La big fonction => ", name)

//Interface est un nouveau mot clé, une sorte de "contrat" où sont définies les règles de typage
interface VoitureInterface { 
        marque: string, 
        modele: string, 
        annee: number, 
        couleur: string
}

//On peut l'écrire aussi de cette manière, c'est le même effet. Interface créé un "objet miroir" en mémoire qu'il utilisera pour vérifier les types des propriétés, tandis que type ne créé rien du tout, il ne fait que vérifier directement sans utiliser de mémoire. Il vaut donc mieux privilégier le type. Différence notable : les interfaces, à l'instar des objets/classes JS, peuvent être extend

type VoitureInterfaceType = {
        moteur : string
        marque: string, 
        modele: string, 
        annee: number, 
        couleur: string
}

interface VoitureInterfaceExtended extends VoitureInterface {
    moteur : string
}

//Ici, on met en type notre interface et elle doit respecter les keys et les types pour les values, sinon ça va PETER
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