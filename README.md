# Campos de formulario

A continuación podremos ver diferentes estructuras de formularios que hemos usado.

## Tipos de lista

1. **Formulario de texto**  
   Este permite al usuario introducir texto libremente.  
   Ejemplo:
   ```html
   <p><label for="campo-nombre">Nombre </label></p>
   <input type="text" name="nombre" id="campo-nombre" />
   ```

2. **Formulario de contraseña**  
   Este nos permite introducir texto en formato contraseña, es decir, que cuando escribamos algo dentro de ese formulario, saldrá en "*" en vez de texto plano.  
   Ejemplo:
   ```html
   <p><label for="campo-password">Contraseña </label></p>
   <input type="password" name="contrasenya" id="campo-password" />
   ```

3. **Formulario de tipo número**  
   Este formulario únicamente nos permite insertar números. Se puede limitar el máximo de números usando los atributos `min` y `max`.  
   Ejemplo:
   ```html
   <p><label for="campo-edad">Edad </label></p>
   <input type="number" id="campo-edad" min="1" max="120" value="0" />
   ```

4. **Formulario de fecha**  
   Nos mostrará un formulario en el cual podemos introducir una fecha específica.  
   Ejemplo:
   ```html
   <p><label for="campo-fecha">Fecha de nacimiento </label></p>
   <input type="date" name="fecha-nacimiento" id="campo-fecha" />
   ```

5. **Formulario de color**  
   Este nos mostrará una paleta de colores en la cual podemos escoger un color.  
   Ejemplo:
   ```html
   <p><label for="campo-color">Color favorito </label></p>
   <input type="color" name="color" id="campo-color" />
   ```