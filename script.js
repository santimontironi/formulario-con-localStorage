const btnEnvio = document.getElementById("btnenviar")
const formulario = document.querySelector("form")
const tbody = document.querySelector("tbody")

formulario.addEventListener("submit",function(event){
    event.preventDefault()

    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const edad = document.getElementById("edad").value

    const fila = document.createElement("tr")
    fila.classList.add("striped")

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
    `

    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }

    let personas = JSON.parse(localStorage.getItem("personas")) || [] //es para retornar si o si un array en caso de que sea null y para inicializarlo como un arreglo (aunque este vacio)

    personas.push(persona)

    localStorage.setItem("personas", JSON.stringify(personas)) //Transforma a string el JSON para guardarlo correctamente.

    tbody.appendChild(fila)

    formulario.reset()
})

document.addEventListener("DOMContentLoaded",function(){
    let personas = JSON.parse(localStorage.getItem("personas")) || [] //Lo pasa a objeto JSON nuevamente para poder mostrarlo por pantalla

    personas.forEach(persona => {
        const fila = document.createElement("tr")
        fila.classList.add("striped")
        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
        `
        tbody.appendChild(fila)
    });
})
