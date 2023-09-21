const app = document.getElementById("app")
const panel = (parametro) =>{
    return`
            <fieldset>
                <legend>${parametro.id}</legend>
                <label for="${parametro.label1}">${parametro.label1}</label>
                <input type="text" id="${parametro.label1}"name="${parametro.label1}">
                <label for="${parametro.label2}">${parametro.label2}</label>
                <input type="text"id="${parametro.label2}"name="${parametro.label2}">
            </fieldset>`
    }
    app.innerHTML=panel({id:"Informacion de usuario", label1: "Nombre",label2:"Correo electronico"})
    app.innerHTML+=panel({id:"informacion de direccion", label1: "Direccion",label2:"Ciudad"})
    