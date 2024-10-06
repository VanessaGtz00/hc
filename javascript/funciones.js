const signosChinos = [
    { signo: 'Mono', imagen:'./imagenes/mono.jpeg' },
    { signo: 'Gallo', imagen: './imagenes/gallo.jpeg' },
    { signo: 'Perro', imagen: './imagenes/perro.jpeg' },
    { signo: 'Cerdo', imagen: './imagenes/cerdo.jpeg' },
    { signo: 'Rata', imagen: './imagenes/rata.jpg' },
    { signo: 'Buey', imagen: './imagenes/buey.jpeg' },
    { signo: 'Tigre', imagen: './imagenes/tigre.jpeg' },
    { signo: 'Conejo', imagen: './imagenes/conejo.jpeg' },
    { signo: 'Dragón', imagen: './imagenes/dragon.jpeg' },
    { signo: 'Serpiente', imagen: './imagenes/serpiente.jpeg' },
    { signo: 'Caballo', imagen: './imagenes/caballo.jpeg' },
    { signo: 'Cabra', imagen: './imagenes/cabra.jpeg' }
];

document.getElementById('horoscopo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const anioNacimiento = document.getElementById('anio-nacimiento').value;
    
    if (anioNacimiento) {
        const resto = anioNacimiento % 12;
        const signo = signosChinos[resto];
        
        document.getElementById('signo').textContent = `Tu signo es: ${signo.signo}`;
        const imagen = document.getElementById('imagen-signo');
        imagen.src = signo.imagen;
        imagen.style.display = 'block';
    }
});