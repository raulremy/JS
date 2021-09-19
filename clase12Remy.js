/* ***************** SELECTORES *********************** */
const inpCorreo = document.querySelector("#correo");
const inpPassword = document.querySelector("#password");
const btnEnviar = document.querySelector("#formBtn");


/* ***************** LISTENERS ************************ */
btnEnviar.addEventListener("click", formEnviar);


/* ***************** FUNCIONES ************************ */


// Ver datos de formularios
function formEnviar(e){
    e.preventDefault();
    console.log(inpCorreo.value);
    console.log(inpPassword.value);

    if(inpPassword.value == ""){
        alert("Ingrese su contraseña!")
    }
    else if(!inpCorreo.value.includes("@" && ".com")){
        alert("Los datos no son validos. Por favor, vuelva a cargar el formulario.")
    }



}
