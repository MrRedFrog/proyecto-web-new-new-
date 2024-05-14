/* LOGIN NO LISTO*/
/*  rut: largo 9 a 10 caracteres
    nombre: largo 3 y 20
    apellido pat: largo 3 y 20 
    apellid mat: largo 3 y 20
    edad: entre 18 y 25 años 
    celular: largo entre 9 y 12 caracteres
*/
/* DECLARATION VAR*/
document.getElementById("formulario").addEventListener("submit", function(event) {
    var rut = document.getElementById("rut");
    var nombre = document.getElementById("nombre");
    var apmat = document.getElementById("appat");
    var appat = document.getElementById("apmat");
    var edad = document.getElementById("edad");
    var celular = document.getElementById("celular");

    if(rut.value.length < 9 || rut.value.length > 10){
        console.log("El RUT ingresado debe tener entre 9 y 10 caracteres");
        event.preventDefault(); // Evita que el formulario se envíe
    }

    // Aquí puedes agregar más validaciones para los otros campos

});


