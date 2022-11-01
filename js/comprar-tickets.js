const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");

function reset_total_a_pagar() {
    total.innerHTML = "";
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidadTickets.value = 0;
    categoria.value = 0;
}

function calcular_total(){
    
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

    switch (categoria.value){
        case "1":
            totalPagar = totalPagar - (descuentoEstudiante / 100 * totalPagar);
            break;
        case "2":
            totalPagar = totalPagar - (descuentoTrainee / 100 * totalPagar);
            break;
        case "3":
            totalPagar = totalPagar - (descuentoJunior / 100 * totalPagar);
            break;
        default:
            break;
    }

    total.innerHTML = totalPagar;

}

btnResumen.addEventListener('click', calcular_total);
btnBorrar.addEventListener('click', reset_total_a_pagar);