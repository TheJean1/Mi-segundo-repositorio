document.getElementById('calcular').addEventListener('click', function() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const cedula = document.getElementById('cedula').value;
    const hoy = new Date();
    
    // Calcular edad
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Calcular meses y días
    const meses = hoy.getMonth() - fechaNacimiento.getMonth() + (hoy.getFullYear() - fechaNacimiento.getFullYear()) * 12;
    const dias = Math.floor((hoy - fechaNacimiento) / (1000 * 60 * 60 * 24));

    // Verificar cédula
    const esEcuatoriana = cedula.length === 10; // Simple verificación de longitud

    // Mostrar resultados
    document.getElementById('resultado').innerHTML = `Tienes ${edad} años, ${meses} meses y ${dias} días. <br> La cédula es ${esEcuatoriana ? 'Ecuatoriana' : 'no Ecuatoriana'}.`;
});
