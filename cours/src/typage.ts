// Déclaration d'une variable constante de type string
const mastring: string = "coucou"

// Définition d'une fonction avec des paramètres typés et un type de retour
// Cette fonction prend deux chaînes de caractères et un nombre comme paramètres
// et retourne une chaîne de caractères
function maFonction(a: string, b: number, c: string): string {
    console.log("a => ", a)
    console.log("b => ", b)
    console.log("c => ", c)
    // Retourne la valeur du premier paramètre
    return a
}

// Appel de la fonction et stockage du résultat dans une constante
// "john" est passé comme premier argument (a)
// 40 est passé comme deuxième argument (b)
// la constante mastring ("coucou") est passée comme troisième argument (c)
const name = maFonction("john", 40, mastring)

// Affichage du résultat retourné par la fonction
console.log("name de la fonction => ", name)

// Définition d'une interface qui décrit la structure d'un objet voiture
// Les interfaces en TypeScript permettent de définir des contrats pour les objets
interface VoitureInterface {
    marque: string;  
    modele: string;  
    annee: number;  
    couleur: string; 
}

// Création d'une interface étendue qui hérite de toutes les propriétés de VoitureInterface
// et ajoute une propriété supplémentaire "coucou"
// L'héritage d'interface permet de réutiliser des définitions existantes
interface NewInterface extends VoitureInterface {
    coucou: string   // Une propriété additionnelle spécifique à cette nouvelle interface
}

// Création d'un objet qui implémente l'interface NewInterface
// Cet objet doit avoir toutes les propriétés de VoitureInterface plus la propriété "coucou"
const voiture2: NewInterface = {
    coucou: "coucou", // Valeur pour la propriété supplémentaire
    marque: "Renault", // Valeur pour la propriété héritée
    modele: "Clio",   
    annee: 2020,      
    couleur: "rouge"  
}



// Définition d'un type personnalisé avec la même structure que l'interface
// Les types peuvent être utilisés de manière similaire aux interfaces
// mais offrent plus de flexibilité pour des structures complexes
type VoitureInterface2 = {
    marque: string;    
    modele: string;   
    annee: number;     
    couleur: string;   
}

// Création d'un objet conforme à l'interface VoitureInterface
const voiture : VoitureInterface = {
    marque: "Renault",
    modele: "Clio",
    annee: 2020,
    couleur: "rouge"
}

// Fonction pour afficher les détails d'une voiture
// Prend un objet voiture conforme à l'interface VoitureInterface en paramètre
// et ne retourne rien (void)
function afficherVoiture(
    voiture: VoitureInterface): void {
    console.log(`Voiture : ${voiture.marque} ${voiture.modele}, Année : ${voiture.annee}, Couleur : ${voiture.couleur}`);
}
    
afficherVoiture(voiture);