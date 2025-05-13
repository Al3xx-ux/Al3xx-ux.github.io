   let min_num = 1;
        let max_num = 100;
        let max_intentos = 10;
        let numero = Math.floor(Math.random() * max_num) + 1;
        let contador = 0;
        
        
   
   
        function comparar_numero() {
            let field_submit = document.getElementById("field_submit");
            field_submit.value = "¡Adivina! (errores: " + contador + ")";

            let my_num_input = document.getElementById("campo-id"); 
            let my_num = my_num_input.value;
            my_num = Number(my_num); 
            let resultado = document.getElementById("resultado");
            
            

            if (contador >= max_intentos) {
                resultado.innerHTML = '<strong class="error">¡Has perdido! El número era ' + numero + '</strong>';
                field_submit.disabled = true;
                return;
            }


            
            if (my_num == "") {
                resultado.innerHTML = '<strong class="error">El formulario está vacío !!. Debes introducir un numero entre ' +min_num+ ' o ' +max_num+ '. </strong>';
                return;
            } else if (my_num < min_num) {
                resultado.innerHTML = '<strong class="error">El número debe ser mayor que 0</strong>';
                return;
            } else if (my_num > max_num) {
                resultado.innerHTML = '<strong class="error">El número debe ser menor que 101</strong>';
                return;
            }
    
            contador++;
    
          
    

            if (my_num > numero) {
                resultado.innerHTML = '<strong class="error">El número es menor que ' + my_num + '</strong>';
                my_num_input.classList.add("error_input");
            } else if (my_num < numero) {
                resultado.innerHTML = '<strong class="error">El número es mayor que ' + my_num + '</strong>';
                my_num_input.classList.add("error_input");

            } else {
                resultado.innerHTML = '<marquee><strong class="you-win">¡Has acertado!</strong></marquee>';
            }    
            
            my_num_input.value = "";
            my_num_input.focus();
        }