const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");


function quitarClaseError() {
    let formulario = document.querySelectorAll(".form-control, .form-select");
    for (let i=0; i<formulario.length; i++){
        formulario[i].classList.remove('is-invalid');
    }
}

function reset_total_a_pagar() {
    quitarClaseError();
    total.innerHTML = "";
}

function calcular_total(){
    // aca llamar funcion para reset de campos

    
    // Controles de campos

    if (nombre.value === ""){
        alert("Por favor ingresar su nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }else{
        nombre.classList.remove("is-invalid");
    }


    if (apellido.value === ""){
        alert("Por favor ingresar su apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }else{
        apellido.classList.remove("is-invalid");
    }

    if (email.value === ""){
        alert("Por favor ingresar su email");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }else{
        email.classList.remove("is-invalid");
    }

    const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if (!emailValido(email.value)){
        alert("Por favor ingresar un email valido");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }else{
        email.classList.remove("is-invalid");
    }

    if ( (cantidadTickets.value < 1) || (isNaN(cantidadTickets.value)) || (!Number.isInteger(Number(cantidadTickets.value))) ){
        alert("Por favor ingresar una cantidad correcta de tickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        console.log(Number(cantidadTickets.value));
        return;
    }else{
        cantidadTickets.classList.remove("is-invalid");
    }




    // cálculos de pago

    let totalPagar = (cantidadTickets.value) * valorTicket;

    if (categoria.value == 1){
        totalPagar = totalPagar - (descuentoEstudiante / 100 * totalPagar);
    }
    if (categoria.value == 2){
        totalPagar = totalPagar - (descuentoTrainee / 100 * totalPagar);
    }
    if (categoria.value == 3){
        totalPagar = totalPagar - (descuentoJunior / 100 * totalPagar);
    }

    total.innerHTML = totalPagar;


}

btnResumen.addEventListener('click', calcular_total);
btnBorrar.addEventListener('click', reset_total_a_pagar);