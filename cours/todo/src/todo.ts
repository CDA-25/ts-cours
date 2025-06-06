//céer un input
//crée un button crée une tache
const buttonAdd:HTMLButtonElement = document.getElementById("add")! as HTMLButtonElement

//crée un bouton supprimer une tache
/* const buttonDelete:HTMLButtonElement = document.getElementById("delete")! as HTMLButtonElement

//crée un bouton modifier une tâche
const boutonModif:HTMLButtonElement = document.getElementById("modif")! as HTMLButtonElement */

//crée un tableau de taches
let tache:string[] = []


//ajouter une tache dans un tableau de tache
buttonAdd.addEventListener("click", () => {
    const input:HTMLInputElement = document.getElementById("input")! as HTMLInputElement
    let div:HTMLDivElement = document.createElement("div")
    div.className= String("element")
    div.textContent= String(input.value)
    tache.push(input.value)

    const container:HTMLDivElement = document.getElementById("todo")! as HTMLDivElement
    container.appendChild(div)
    //console.log(tache)
})
///supprimer tache du tableau

//modifier tache du tableau
