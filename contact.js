    let nombre;
    let contrasenya;
    let campo_comentario;
    let fecha_nacimiento;
    let color;
    let subscribe_button;
    let contact_form;
    let resultado;

    document.addEventListener("DOMContentLoaded", (event) => {
        nombre = document.getElementById("campo-nombre");
        contrasenya = document.getElementById("campo-password");
        campo_comentario = document.getElementById("campo_comentario");
        fecha_nacimiento = document.getElementById("campo-fecha");
        color = document.getElementById("campo-color");
        subscribe_button = document.getElementById("subscribe");
        contact_form = document.getElementById("contact_form");
        
        subscribe_button.addEventListener("click", function(event) {
            if (subscribe_button.checked){
                alert("JAJAJAJAJJAJJAJ gracias por donarme xddd bomboclat :v");
            }
            else{
                alert("Suscribete flan de huvo");         
            }
        });

        contact_form.addEventListener("submit", function(event) {
            let send = true;
            
            if (nombre.value.length <= 2 || nombre.value.length >= 32) {
                send = false;
                nombre.style.border = "1px solid red";
            } else {
                nombre.style.border = "1px solid green";
            }
            
            console.log(fecha_nacimiento.value);
            
            if (fecha_nacimiento.value == "") {
                send = false;
                fecha_nacimiento.style.border = "1px solid red";
            } else {
                let fecha = fecha_nacimiento.value.split("-");
                let year = parseInt(fecha[0]);
                let month = parseInt(fecha[1]);
                let day = parseInt(fecha[2]);

                if (isNaN(year) || isNaN(month) || isNaN(day)) {
                    send = false;
                    fecha_nacimiento.style.border = "1px solid red";
                } else {
                    if(year <= 0 || year > 2025){
                        send = false;
                        fecha_nacimiento.style.border = "1px solid red";
                    }
                    else if (month <= 0 || month > 12) {
                        send = false;
                        fecha_nacimiento.style.border = "1px solid red";
                    }
                    else if (day <= 0 || day > 31) {
                        send = false;
                        fecha_nacimiento.style.border = "1px solid red";    
                    }
                }
            }

            if (color.value.length != 7) {
                send = false;
                color.style.border = "1px solid red";
            } else {
                if (color.value[0] != "#") {
                    send = false;
                    color.style.border = "1px solid red";
                }
                else{
                    color.style.border = "1px solid green"; 
                }
            }
            if(campo_comentario.value.length < 5 || campo_comentario.value.length > 255){
                send = false;
                campo_comentario.style.border = "1px solid red";
            }
            else{
                campo_comentario.value.replace(/'/g, "\\'");
                    
                    
            }

            if (!send) {
                event.preventDefault();
            }
        }); 
    }); 