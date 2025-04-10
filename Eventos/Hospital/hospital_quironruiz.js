let SEGUROS_MEDICOS = [
    {value: 1, texto: 'Adeslas'},
    {value: 2, texto: 'Asisa'},
    {value: 3, texto: 'Caser Salud'},
    {value: 4, texto: 'DKV'},
    {value: 5, texto: 'Mapfre'},
    {value: 6, texto: 'Sanitas'}
];

// Escribe aquí tu código


// Funcion para hacer obligatorio rellenar los campos de nombre y apellidos
function validarNombreApellidos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    if (nombre === "" || apellidos === "") {
        alert("Por favor, rellena los campos de nombre y apellidos.");
        return false;
    }
    return true;
}

// Funcion para que el DNI sea el formato correcto; 8 digitos y una letra y que la letra sea generada por la convinacion del resto de una operacion matematica y el resto debe de ser un numero del 0 al 22 que sea una letra
// y que la letra sea generada por la convinacion del resto de una operacion matematica y el resto debe de ser un numero del 0 al 22 que sea una letra
function validarDNI() {
    let dni = document.getElementById("dni").value;
    let dniRegex = /^\d{8}[A-Z]$/; // Expresion regular para validar el DNI
    if (!dniRegex.test(dni)) {
        alert("Por favor, introduce un DNI válido (8 dígitos y una letra).");
        return false;
    }
    let numero = dni.substring(0, 8); // Obtener los primeros 8 caracteres del DNI
    let letra = dni.charAt(8); // Obtener la letra del DNI
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE"; // Letras del DNI
    let resto = numero % 23; // Obtener el resto de la division entre el numero y 23
    if (letra !== letras.charAt(resto)) { // Comparar la letra con la letra generada por el resto
        alert("La letra del DNI no es correcta.");
        return false;
    }
    return true;
}

// Funcion para poblar de manera dinamica el desplegable de los seguros medicos que son adeslas, asisa, caser salud, dkv, maspfre y sanitas
function cargarSegurosMedicos() {
    let selectSeguros = document.getElementById("segurosMedicos");
    selectSeguros.innerHTML = ""; // Limpiar el select antes de agregar las opciones
    for (let i = 0; i < SEGUROS_MEDICOS.length; i++) {
        let option = document.createElement("option");
        option.value = SEGUROS_MEDICOS[i].value;
        option.text = SEGUROS_MEDICOS[i].texto;
        selectSeguros.appendChild(option); // Agregar la opcion al select
    }
}

// Funcion para seleccionar el medico entre medio de familia o especialistas, si seleccionas especialistas se habita el desplegable que sera obligatorio rellenar y si has marcado medioco de famlia deberia estar desabilitado
function habilitarMedico() {
    let medicoFamilia = document.getElementById("medicoFamilia").checked; // Obtener el valor del checkbox
    let selectMedicos = document.getElementById("medicos"); // Obtener el select de los medicos
    if (medicoFamilia) { // Si el checkbox esta marcado
        selectMedicos.disabled = true; // Deshabilitar el select
        selectMedicos.value = ""; // Limpiar el select
    } else { // Si el checkbox no esta marcado
        selectMedicos.disabled = false; // Habilitar el select
    }
}

// Funcion para rellenar la fecha de la cita y solo puede ser entre lunes a jueves, si se coge un dia fuera de rango, debe de aparecer el error: "El dia de la cita solo puede ser de lunes a jueves"
function validarFechaCita() {
    let fechaCita = new Date(document.getElementById("fechaCita").value); // Obtener la fecha de la cita
    let diaSemana = fechaCita.getDay(); // Obtener el dia de la semana (0=domingo, 1=lunes, 2=martes, 3=miércoles, 4=jueves, 5=viernes, 6=sábado)
    if (diaSemana === 0 || diaSemana === 5 || diaSemana === 6) { // Si el dia de la semana es domingo o viernes o sabado
        alert("El día de la cita solo puede ser de lunes a jueves."); // Mostrar el mensaje de error
        return false; // Retornar false para que no se envie el formulario
    }
    return true; // Retornar true para que se envie el formulario
}

// Funcion para seleccionar la hora de la cita, si la cita es de lunes a miercoles debe de estar comprendida entre las 10:00 y las 14:15 y si es jueves debera estar en el rango 18:30 a 20:00, si no es valida se mostrar al usuario el error "Esta hora no es valida"
function validarHoraCita() {
    let fechaCita = new Date(document.getElementById("fechaCita").value); // Obtener la fecha de la cita
    let diaSemana = fechaCita.getDay(); // Obtener el dia de la semana (0=domingo, 1=lunes, 2=martes, 3=miércoles, 4=jueves, 5=viernes, 6=sábado)
    let horaCita = document.getElementById("horaCita").value; // Obtener la hora de la cita
    let hora = parseInt(horaCita.split(":")[0]); // Obtener la hora
    let minutos = parseInt(horaCita.split(":")[1]); // Obtener los minutos
    if (diaSemana === 0 || diaSemana === 5 || diaSemana === 6) { // Si el dia de la semana es domingo o viernes o sabado
        alert("El día de la cita solo puede ser de lunes a jueves."); // Mostrar el mensaje de error
        return false; // Retornar false para que no se envie el formulario
    } else if (diaSemana <= 3) { // Si el dia de la semana es lunes, martes o miercoles
        if (hora < 10 || (hora === 14 && minutos > 15)) { // Si la hora es menor que las 10:00 o mayor que las 14:15
            alert("Esta hora no es válida."); // Mostrar el mensaje de error
            return false; // Retornar false para que no se envie el formulario
        }
    } else if (diaSemana === 4) { // Si el dia de la semana es jueves
        if (hora < 18 || (hora === 20 && minutos > 0)) { // Si la hora es menor que las 18:30 o mayor que las 20:00
            alert("Esta hora no es válida."); // Mostrar el mensaje de error
            return false; // Retornar false para que no se envie el formulario
        }
    }
    return true; // Retornar true para que se envie el formulario
}

// Funcion para validar el formulario al enviar
function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envio del formulario
    if (validarNombreApellidos() && validarDNI() && validarFechaCita() && validarHoraCita()) { // Si todos los campos son validos
        alert("Formulario enviado correctamente."); // Mostrar el mensaje de exito
        document.getElementById("formulario").reset(); // Limpiar el formulario
    }
}