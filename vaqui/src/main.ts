import './style.css'

const button = document.getElementById("inputButton")!

let container = document.createElement("div")
container.id = "container"

let liste = []

button.addEventListener("click" ,function() {
  let input = document.getElementById("inputText") as HTMLInputElement
  liste.push(input.value)
  console.log(liste)

  container.textContent = ""
  
  document.body.appendChild(container)

  for (let i = 0; i < liste.length ; i++) {
        
        let ticktickDiv = document.createElement("div")
        ticktickDiv.id = "ticktickdiv"
        container.appendChild(ticktickDiv)
    
    
        let listElement = document.createElement("div")
        listElement.id = "listElement"


        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = `ticktickDiv.${i+1}`
        checkbox.name = "test"
        checkbox.value = "off"
        listElement.textContent = (i+1) +  " : " + liste[i]

        ticktickDiv.appendChild(listElement)
        ticktickDiv.appendChild(checkbox)
        
  }

})


//container

  //div
      //checkbox
      //listElement

  //div
      //checkbox
      //listElement

      //div
      //checkbox
      //listElement

      //div
      //checkbox
      //listElement