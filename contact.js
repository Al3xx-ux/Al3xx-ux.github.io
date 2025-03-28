function validarFormulario() {
    let nombre = document.getElementById("campo-nombre");
    let contrasenya = document.getElementById("campo-password");
    let edad = document.getElementById("campo-edad");
    let fecha_nacimiento = document.getElementById("campo-fecha");
    let color = document.getElementById("campo-color");
    

    if (nombre.value == "") {
        nombre.classList.add("error_input");
    }

    if (contrasenya.value == "") {
        contrasenya.classList.add("error_input");
    } 

    if (edad.value == "") {
        edad.classList.add("error_input");
    } 

    if (fecha_nacimiento.value == "") {
        fecha_nacimiento.classList.add("error_input");  
    }         
    if (color.value == "") {
        color.classList.add("error_input");
    } 
}       