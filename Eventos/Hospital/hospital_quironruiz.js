let SEGUROS_MEDICOS = [
    {value: 1, texto: 'Adeslas'},
    {value: 2, texto: 'Asisa'},
    {value: 3, texto: 'Caser Salud'},
    {value: 4, texto: 'DKV'},
    {value: 5, texto: 'Mapfre'},
    {value: 6, texto: 'Sanitas'}
];

// Escribe aquí tu código
// Función para validar nombre y apellidos
function validarNombreApellidos() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    if (nombre === "" || apellidos === "") {
        alert("Por favor, rellena los campos de nombre y apellidos.");
        return false;
    }
    return true;
}

// Función para validar el DNI
function validarDNI() {
    let dni = document.getElementById("dni").value.toUpperCase().trim();
    let dniRegex = /^\d{8}[A-Z]$/;
    if (!dniRegex.test(dni)) {
        alert("Por favor, introduce un DNI válido (8 dígitos y una letra).");
        return false;
    }
    let numero = parseInt(dni.substring(0, 8));
    let letra = dni.charAt(8);
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = numero % 23;
    if (letra !== letras.charAt(resto)) {
        alert("La letra del DNI no es correcta.");
        return false;
    }
    return true;
}

// Función para cargar dinámicamente los seguros médicos
function cargarSegurosMedicos() {
    let selectSeguros = document.getElementById("segurosMedicos");
    selectSeguros.innerHTML = "<option value=''>Seleccione una opción</option>";
    SEGUROS_MEDICOS.forEach(seguro => {
        let option = document.createElement("option");
        option.value = seguro.value;
        option.text = seguro.texto;
        selectSeguros.appendChild(option);
    });
}

// Función para habilitar o deshabilitar el select de médicos
function habilitarMedico() {
    let medicoFamilia = document.getElementById("medicoFamilia").checked;
    let selectMedicos = document.getElementById("medicos");
    selectMedicos.disabled = medicoFamilia;
    if (medicoFamilia) {
        selectMedicos.value = "";
    }
}

// Validar fecha: solo de lunes a jueves
function validarFechaCita() {
    let fechaInput = document.getElementById("fechaCita").value;
    if (!fechaInput) {
        alert("Por favor, introduce una fecha.");
        return false;
    }
    let fechaCita = new Date(fechaInput);
    let diaSemana = fechaCita.getDay();
    if (diaSemana === 0 || diaSemana === 5 || diaSemana === 6) {
        alert("El día de la cita solo puede ser de lunes a jueves.");
        return false;
    }
    return true;
}

// Validar hora de cita según el día
function validarHoraCita() {
    let fechaInput = document.getElementById("fechaCita").value;
    let horaCita = document.getElementById("horaCita").value;

    if (!fechaInput || !horaCita) {
        alert("Por favor, introduce una fecha y una hora.");
        return false;
    }

    let fechaCita = new Date(fechaInput);
    let diaSemana = fechaCita.getDay();

    let [hora, minutos] = horaCita.split(":").map(Number);

    if (diaSemana <= 3) { // Lunes a Miércoles
        if (hora < 10 || (hora > 14) || (hora === 14 && minutos > 15)) {
            alert("Esta hora no es válida para lunes a miércoles (10:00 a 14:15).");
            return false;
        }
    } else if (diaSemana === 4) { // Jueves
        if (hora < 18 || (hora === 18 && minutos < 30) || (hora === 20 && minutos > 0) || hora > 20) {
            alert("Esta hora no es válida para jueves (18:30 a 20:00).");
            return false;
        }
    } else {
        alert("El día de la cita solo puede ser de lunes a jueves.");
        return false;
    }

    return true;
}

// Validar formulario completo
function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario

    if (
        validarNombreApellidos() &&
        validarDNI() &&
        validarFechaCita() &&
        validarHoraCita()
    ) {
        alert("Formulario enviado correctamente.");
        document.getElementById("formulario").reset();
    }
}

// Llamar a cargar seguros cuando cargue la página
window.onload = function () {
    cargarSegurosMedicos();
};