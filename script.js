// Agrega un evento al botón 'calcular' que se ejecuta al hacer clic
document.getElementById('calcular').addEventListener('click', function() {
    // Obtener valores de los campos de entrada
    const fechaNacimientoInput = document.getElementById('fechaNacimiento').value; // Captura la fecha de nacimiento
    const cedula = document.getElementById('cedula').value; // Captura el número de cédula

    // Verificar que los campos no estén vacíos
    if (!fechaNacimientoInput || !cedula) {
        // Limpiar resultados y mostrar mensaje de error
        document.getElementById('resultadoEdad').innerHTML = ''; 
        document.getElementById('resultadoCedula').innerHTML = ''; 
        document.getElementById('errorMensaje').innerHTML = '<span style="color: red;">Por favor, completa todos los campos.</span>';
        return; // Salir de la función si hay campos vacíos
    }

    // Calcular edad
    const fechaNacimiento = new Date(fechaNacimientoInput); // Convierte la fecha de nacimiento a un objeto Date
    const hoy = new Date(); // Obtiene la fecha actual
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear(); // Calcula la edad en años
    const mes = hoy.getMonth() - fechaNacimiento.getMonth(); // Calcula la diferencia de meses
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--; // Ajusta la edad si el cumpleaños no ha ocurrido este año
    }

    // Calcular meses y días
    const meses = hoy.getMonth() - fechaNacimiento.getMonth() + (hoy.getFullYear() - fechaNacimiento.getFullYear()) * 12; // Calcula la edad en meses
    const dias = Math.floor((hoy - fechaNacimiento) / (1000 * 60 * 60 * 24)); // Calcula la edad en días

    // Verificar cédula
    const esEcuatoriana = cedula.length === 10; // Simple verificación de longitud para determinar si es cédula ecuatoriana

    // Mostrar resultados
    document.getElementById('resultadoEdad').innerHTML = `<span style="color: black;">Tienes ${edad} años, ${meses} meses y ${dias} días.</span>`; // Muestra la edad calculada
    document.getElementById('resultadoCedula').innerHTML = `<span style="color: black;">La cédula es ${esEcuatoriana ? 'Ecuatoriana' : 'no Ecuatoriana'}.</span>`; // Muestra si la cédula es ecuatoriana o no
    document.getElementById('errorMensaje').innerHTML = ''; // Limpiar mensaje de error
});