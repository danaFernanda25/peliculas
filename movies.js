const datosPeliculas = {
    accion: [
        { titulo: "Mision imposible: sentencia mortal", sinopsis: "Ethan Hunt (Tom Cruise) y su equipo del FMI se embarcan en su misión más peligrosa hasta la fecha: Localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta. Enfrentado a un enemigo misterioso y todopoderoso, Ethan se ve obligado a considerar que nada puede anteponerse a su misión, ni siquiera las vidas de aquellos que más le importan. (FILMAFFINITY)", 
        imagen: "img/mision_imposible.jpg" },
        { titulo: "Rapidos y furiosos X", sinopsis: "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: Un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa. (FILMAFFINITY)", 
        imagen: "img/rapidos_x.jpg" },
        { titulo: "Megalodon2: el gran abismo", sinopsis: "Después de detectar un considerable aumento de actividad en una fosa marina a unos 7.600 metros de profundidad, un grupo de científicos y expertos decide pedir ayuda a Jonas Taylor (Jason Statham). Jonas deberá adentrarse en este ecosistema submarino, a profundidades donde nunca antes ha llegado el hombre. En esa fosa habita una especie desconocida, y sea lo que sea, Jonas y su equipo tendrán que enfrentarse a lo que habite allí abajo. En seguida descubrirán que se trata de megalodones gigantescos, un tipo de depredador alfa, y esta vez cazan en grupo. Cuando varios de ellos escapen de la fosa marina y ataquen en la superficie, Jonas y el resto de su equipo deberán poner todos los medios a su alcance para frenar esa amenaza.", 
        imagen: "img/megalodon.jpg" },
        { titulo: "Rapidos y furiosos X", sinopsis: "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: Un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa. (FILMAFFINITY)", 
        imagen: "img/rapidos_x.jpg" }
    ],
    terror: [
        { titulo: "Hablame", sinopsis: "La solitaria adolescente Mia se engancha a la emoción de invocar espíritus utilizando una mano embalsamada, pero cuando se enfrenta a un alma que dice ser su madre muerta, desata una plaga de fuerzas sobrenaturales y se debate entre decidir en quién puede confiar: en los vivos o en los muertos. (FILMAFFINITY)", 
        imagen: "img/talkTome.jpg" },
        { titulo: "La monja II", sinopsis: "Año 1956. Cuatro años antes la hermana Irene se tuvo que enfrentar a una inexplicable fuerza demoníaca que aterraba un convento de Rumanía. Un demonio de nombre Valak poseyó los cuerpos de los religiosos miembros allí presentes, y también de los investigadores que le dieron caza. Ahora es Francia donde el mal campa a sus anchas, con un sacerdote asesinado, y todas las señales apuntan a Valak. La hermana Irene tendrá que enfrentarse a esta malévola pero familiar fuerza que debe ser contenida a toda costa.", 
        imagen: "img/laMonja.jpg" },
    ],
    aventura: [
        { titulo: "Ant-Man y la Avispa: Quantumanía", sinopsis: "Scott Lang (Paul Rudd) está disfrutando de su vida como Vengador y de la fama que ha ganado por ayudar a salvar a la humanidad en Vengadores: Endgame. Todo el mundo le quiere y le adora. Incluso ha publicado un libro. No obstante,eso cambia cuando los secretos familiares empiezan a salir a la luz. Por culpa de una experimento, Scott Lang, su hija Cassie Lang (Kathryn Newton), su pareja Hope van Dyne (Evangeline Lilly), sus suegos Hank Pym (Michael Douglas) y Janet van Dyne (Michelle Pfeiffer) son arrastrados al Reino Cuántico. Allí, en esta dimensión del multiverso, se encontrarán con Kang el Conquistador (Jonathan Majors), el gran villano de la nueva era del Universo Cinematográfico de Marvel. Ant-Man y la Avispa: Quantumanía es la película encargada de dar el pistoletazo de salida a la Fase 5 de la franquicia.", 
        imagen: "img/antMan.jpg" },
        { titulo: "Super mario bros", sinopsis: "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi. Con la ayuda del champiñón local Toad y unas cuantas nociones de combate de la guerrera líder del Reino Champiñón, la princesa Peach, Mario descubre todo el poder que alberga en su interior. (FILMAFFINITY)", 
        imagen: "img/marioBros.jpg" },
    ],
};

function mostrarPeliculas(categoria) {
    const contenedorPeliculas = document.getElementById('contenedor-peliculas');
    contenedorPeliculas.innerHTML = '';

    const peliculas = datosPeliculas[categoria];
    peliculas.forEach(pelicula => {
        const elementoPelicula = document.createElement('div');
        elementoPelicula.className = 'pelicula';
        elementoPelicula.innerHTML = `<img src="${pelicula.imagen}" alt="${pelicula.titulo}"><p>${pelicula.titulo}</p>`;
        elementoPelicula.addEventListener('click', () => mostrarDetallesPelicula(pelicula, elementoPelicula));
        contenedorPeliculas.appendChild(elementoPelicula);
    });
    ocultarDetallesPelicula();
}

function mostrarDetallesPelicula(pelicula, elementoPelicula) {
    const contenedorDetallesPelicula = document.getElementById('detalles-pelicula');
    contenedorDetallesPelicula.innerHTML = `<h2>${'Sinopsis'}</h2><p>${pelicula.sinopsis}</p>`;
    
    // Ocultar otras películas excepto la seleccionada
    const contenedorPeliculas = document.getElementById('contenedor-peliculas');
    const botonRetroceso = document.getElementById('boton-retroceso');
    contenedorPeliculas.childNodes.forEach(child => {
        if (child !== elementoPelicula) {
            child.style.display = 'none';
            botonRetroceso.style.display = 'block';
        }
    });
    
}

// función para mostrar todas las películas nuevamente cuando se hace clic en el botón de retroceso.
function mostrarTodasLasPeliculas() {
    const botonRetroceso = document.getElementById('boton-retroceso');
    const contenedorPeliculas = document.getElementById('contenedor-peliculas');
    contenedorPeliculas.childNodes.forEach(child => {
        child.style.display = 'block'; // Mostrar todas las películas
    });
    botonRetroceso.style.display = 'none'
    ocultarDetallesPelicula(); // Limpiar los detalles de la película
}

function ocultarDetallesPelicula() {
    const contenedorDetallesPelicula = document.getElementById('detalles-pelicula');
    const botonRetroceso = document.getElementById('boton-retroceso');
    contenedorDetallesPelicula.innerHTML = ''; // Limpiar el contenido
    botonRetroceso.style.display = 'none'
}