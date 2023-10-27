function obtenerCursosCategoria1() {
    const progra = document.getElementById("contenido");
    fetch("http://localhost:3000/cursos")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const curso = data[i];
                progra.innerHTML += `<html>
                <div class="txtcurso">
                <h3 class="nombre-titulo">Curso: ${curso.TituloCurso}</h3>
                <p class="descripcion">${curso.Descripcion}</p>
                <div class="items-curso">
                <p><strong>¿Qué aprenderás?</strong></p>
                <div class="items-cursos"><i class='bx bxs-check-circle'></i><p>Las bases y particularidades de JS.</p></div>
                <div class="items-cursos"><i class='bx bxs-check-circle'></i><p>Escribir código óptimo y reutilizable.</p></div>
                <div class="items-cursos"><i class='bx bxs-check-circle'></i><p>Manipular datos y colecciones de datos.</p></div>
                <div class="items-cursos"><i class='bx bxs-check-circle'></i><p>Aplicar lógica de programación en JS.</p></div>
                <div class="caracteristica">
                <i class='bx bx-time-five'></i>
                <p>${curso.duracion}  |</p>
                <i class='bx bx-objects-horizontal-right basico'></i>
                <p>Básico</p>
                </div>
                </div>
            </div>
            <div class="portada">
            <img src="${curso.portada}">
            </div>
            </html>
          `;
            }
        })
        .catch((error) => {
            console.log("Error al obtener cursos:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    obtenerCursosCategoria1();
});

function obtenertemario() {
    const temario = document.getElementById("temario");
    fetch("http://localhost:3000/contenido")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const temar = data[i];
                temario.innerHTML += `
                <div class="temas"><h1>${temar.titulo_contenido}</h1><p>${temar.descripsion_contenido}</p></div>
                `;
            }
        })
        .catch((error) => {
            console.log("Error al obtener cursos:", error);
        });
}

document.addEventListener("DOMContentLoaded", obtenertemario());

function prueba1() {
    const temario = document.getElementById("tema");
    const ID = 1;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                // Accede a la URL del contenido dentro del primer elemento del arreglo
                temario.innerHTML += `
                <div class="temascurso" id="temascurso1" onclick="progreso(1, this), recurso1(), activarseleccion(1)">
                <h1>${data[0].titulo_contenido}</h1><p>${data[0].descripsion_contenido}</p></div>
                `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

document.addEventListener("DOMContentLoaded", prueba1());

function prueba2() {
    const temario = document.getElementById("tema");
    const ID = 2;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                // Accede a la URL del contenido dentro del primer elemento del arreglo
                temario.innerHTML += `
                <div class="temascurso" id="temascurso2" onclick="progreso(1, this), recurso2(), activarseleccion(2)">
                <h1>${data[0].titulo_contenido}</h1><p>${data[0].descripsion_contenido}</p></div>
                `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

document.addEventListener("DOMContentLoaded", prueba2());

function prueba3() {
    const temario = document.getElementById("tema");
    const ID = 3;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                // Accede a la URL del contenido dentro del primer elemento del arreglo
                temario.innerHTML += `
                <div class="temascurso" id="temascurso3" onclick="progreso(1, this), recurso3(), activarseleccion(3)">
                <h1>${data[0].titulo_contenido}</h1><p>${data[0].descripsion_contenido}</p></div>
                `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

document.addEventListener("DOMContentLoaded", prueba3());

function prueba4() {
    const temario = document.getElementById("tema");
    const ID = 4;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                // Accede a la URL del contenido dentro del primer elemento del arreglo
                temario.innerHTML += `
                <div class="temascurso" id="temascurso4" onclick="progreso(1, this), recurso4(), activarseleccion(4)">
                <h1>${data[0].titulo_contenido}</h1><p>${data[0].descripsion_contenido}</p></div>
                `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

document.addEventListener("DOMContentLoaded", prueba4());

function prueba5() {
    const temario = document.getElementById("tema");
    const ID = 5;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                temario.innerHTML += `
                <div class="temascurso" id="temascurso5" onclick="progreso(1, this), recurso5(), activarseleccion(5)">
                <h1>${data[0].titulo_contenido}</h1><p>${data[0].descripsion_contenido}</p></div>
                `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

document.addEventListener("DOMContentLoaded", prueba5());

//AQUI ESTÁN LAS SOLICITUDES PARA RECURSOS
function recurso1() {
    const recurso1Container = document.getElementById("recurso1");
    const ID = 1;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                // Accede a la URL del contenido dentro del primer elemento del arreglo
                recurso1Container.innerHTML = `
            <img src="${data[0].url_contenido}" alt="img">
          `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

function recurso2() {
    const recurso1Container = document.getElementById("recurso1");
    const ID = 2;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                recurso1Container.innerHTML = `
            <img src="${data[0].url_contenido}" alt="img">
          `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

function recurso3() {
    const recurso1Container = document.getElementById("recurso1");
    const ID = 3;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                recurso1Container.innerHTML = `
            <iframe width="800" height="500" src="${data[0].url_contenido}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

function recurso4() {
    const recurso1Container = document.getElementById("recurso1");
    const ID = 4;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                recurso1Container.innerHTML = `
            <iframe width="800" height="500" src="${data[0].url_contenido}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
            } else {
                recurso1Container.innerHTML = "Recurso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

function recurso5() {
    const recurso1Container = document.getElementById("recurso1");
    const ID = 5;
    fetch(`http://localhost:3000/recursos/${ID}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                recurso1Container.innerHTML = `
            <iframe width="800" height="500" src="${data[0].url_contenido}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
            } else {
                recurso1Container.innerHTML = "Curso no encontrado";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el curso: " + error.message);
            recurso1Container.innerHTML = "Error en el servidor";
        });
}

function examen() {
    const recurso1Container = document.getElementById("recurso1");
    recurso1Container.innerHTML = `
    <div class="examen">
    <header>
        <h1>Prueba final</h1>
    </header>
    <section>
        <form name="quizForm" onsubmit="return verificarRespuestas()">
            <h3>1. ¿Cuál es la forma correcta de declarar una variable en JavaScript?</h3>
            <input type="radio" name="p1" value="a">a. let myVar = 10; <br>
            <input type="radio" name="p1" value="b">b. myVar 10; <br>
            <input type="radio" name="p1" value="c">c. var myVar = 10; <br>

            <h3>2. ¿Cuál de las siguientes opciones representa un operador de igualdad estricta (comparación de valor y tipo)?</h3>
            <input type="radio" name="p2" value="a">a. == <br>
            <input type="radio" name="p2" value="b">b. === <br>
            <input type="radio" name="p2" value="c">c. != <br>

            <h3>3. ¿Cuál de las siguientes estructuras de control se utiliza para repetir un bloque de código un número específico de veces?</h3>
            <input type="radio" name="p3" value="a">a. if <br>
            <input type="radio" name="p3" value="b">b. for <br>
            <input type="radio" name="p3" value="c">c. while <br>

            <h3>4. ¿Cuál es la forma correcta de definir una función en JavaScript?</h3>
            <input type="radio" name="p4" value="a">a. function miFuncion() {} <br>
            <input type="radio" name="p4" value="b">b. let miFuncion() {} <br>
            <input type="radio" name="p4" value="c">c. var miFuncion = function() {} <br>

            <h3>5. ¿Cuál es la forma correcta de comentar una sola línea de código en JavaScript?</h3>
            <input type="radio" name="p5" value="a">a. /* Este es un comentario */ <br>
            <input type="radio" name="p5" value="b">b. // Este es un comentario <br>
            <input type="radio" name="p5" value="c">c. ''' Este es un comentario ''' <br>
            
            <input type="submit" value="Enviar">
        </form>
        <div id="resultados"></div>
    </section>
</div>
    `;
}

//FUNCION PARA VALIDAR RESPUESTAS DEL TEST
function verificarRespuestas() {
    var total = 5;
    var puntos = 0;

    const test = document.forms["quizForm"];
    var respuestas = ["a", "b", "b", "a", "b"];

    for (let i = 1; i <= total; i++) {
        if (test["p" + i].value === null || test["p" + i].value === "") {
            alert("Por favor responda la preginta " + i);
            return false;
        } else {
            if (test["p" + i].value === respuestas[i - 1]) {
                puntos++;
            }
        }
    }
    //SI EL RESULTADO DEL TEST ES >= 4 APROBADO Y NERA CERTIFICADO CASO CONTRARIO NO
    const resltado = document.getElementById("resultados");
    if (puntos >= 4) {
        resltado.innerHTML = `<h3>Su resultado es de <span>${puntos}</span>/<span>${total}</span> Aprobaste</h3>
    <button class="btnDeCertificado" id="btnDeCertificado" onclick="certificado(), emisionCertificado()">Ver certificado</button>
    `;
    } else {
        resltado.innerHTML = `<h3>Su resultado es de <span>${puntos}</span>/<span>${total}</span> Reprobaste</h3>
        `;
    }
    return false;
}
const nombreUsuarioCerti = document.getElementById('nombreCompleto');
if (nombreUsuarioCerti) {
    const nombrecertificado = nombreUsuarioCerti.textContent;
    console.log(nombrecertificado)
} else {
    console.log('nombre no encontrado');
}

function certificado() {
    const nombreUsuarioCerti = document.getElementById('nombreCompleto');
    const nombrecertificado = nombreUsuarioCerti.textContent;
    const recurso1Container = document.getElementById("recurso1");
    const fechaActual = new Date().toISOString().slice(0, 10);
    recurso1Container.innerHTML = `
    <div class="cajacertificado" id="cajacertificado">
        <div class="imgcertificado" id="imgcertificado">
            <div class="estilocertifi">
            <img src="/img/certificado.png">
            </div>
            <div class="certificate" id="certificado">
            <div class="header">
                <img src="/img/icon.png" alt="logo">
                <h2>EDsoar</h2>
                <h1>CERTIFICADO DE CURSO</h1>
            </div>
            <div class="content">
                <h2>Por la presente se certifica que</h2>
                <p><strong>${nombrecertificado}</strong></p>
                <p>ha completado exitosamente el curso</p>
                <p><strong>Javascript de cero</strong></p>
                <p>con fecha de finalización:</p>
                <p><strong>${fechaActual}</strong></p>
            </div>
            <div class="firma">
                <img src="https://restaurantemalahierba.com/wp-content/uploads/2018/08/firma-lester.png" alt="Firma">
                <hr>
                <p>Firma director(a)</p>
            </div>
            </div>
        </div>
        <button id="imprimirCertificado" onclick="imprimirContenido()">Imprimir Certificado</button>
    </div>
    `;
};

function imprimirContenido() {
    const contenido = document.getElementById("imgcertificado").outerHTML;

    var ventanaImpresion = window.document.body;
    var ventanaImpresionOriginal = document.body.innerHTML;

    ventanaImpresion.innerHTML = contenido;

    window.print();

    ventanaImpresion.innerHTML = ventanaImpresionOriginal;
};

//OCULTAR CONTENIDOS 
document.querySelectorAll(".pruebas, .miscursos").forEach(function (el) {
    el.style.display = "none";
});

//FUNCION PARA CAMBIAR DE CONTENIDO
function cambiarContenido(opcion) {
    switch (opcion) {
        case "1":
            // contenido.innerHTML = ``;
            document.getElementById("contenido").style.display = "flex";
            document.getElementById("temario").style.display = "grid";
            document.getElementById("infocurso").style.display = "flex";
            document.getElementById("miscursos").style.display = "none";
            document.getElementById("pruebas").style.display = "none";
            break;
        case "2":
            document.getElementById("contenido").style.display = "none";
            document.getElementById("temario").style.display = "none";
            document.getElementById("infocurso").style.display = "none";
            document.getElementById("miscursos").style.display = "flex";
            document.getElementById("pruebas").style.display = "none";
            break;
        case "3":
            document.getElementById("contenido").style.display = "none";
            document.getElementById("temario").style.display = "none";
            document.getElementById("infocurso").style.display = "none";
            document.getElementById("miscursos").style.display = "none";
            document.getElementById("pruebas").style.display = "flex";
            break;
        default:
            break;
    }

    const ite = document.querySelectorAll(".cursos");
    ite.forEach((item) => item.classList.remove("active"));

    const elementoClicado = document.getElementById(`cursos${opcion}`);
    elementoClicado.classList.add("active");
}

//CERRAR SESION
// document.addEventListener("DOMContentLoaded", function () {
//     const cerrarSesionBtn = document.getElementById("cerrarSesionBtn");
//     cerrarSesionBtn.addEventListener("click", function () {
//         window.location.href = "/public/inicio.html";
//     });
// });

function cerrarSesion() {
    const cerrarSesionBtn = document.getElementById("cerrarSesionBtn");
    cerrarSesionBtn.addEventListener("click", function () {
        window.location.href = "/public/inicio.html";
    });
}

//FUNCION PARA LLENAR LA BARRA DE PROGRESO
let progress = 0;

function progreso(incremento, container) {
    if (container.classList.contains("clicado")) {
        console.log("temario ya clickado");
        return;
    }

    progress += incremento;

    if (progress > 6) {
        progress = 6;
    }

    const progresoBar = document.getElementById("progreso-relleno");
    progresoBar.style.width = (progress / 6) * 100 + "%";

    // Calcula el porcentaje y lo muestra
    const porcentaje = (progress / 6) * 100;
    document.getElementById("progreso-porcentaje").textContent =
        porcentaje.toFixed(2) + "%";

    container.classList.add("clicado");
}

function activarseleccion(numero) {
    const ite = document.querySelectorAll("temascurso");
    ite.forEach((item) => item.classList.remove("activeselect"));
    const elementoClicado = document.getElementById(`temascurso${numero}`);
    elementoClicado.classList.add("activeselect");
}

function activarSeleccion(numero) {
    const elementosTemaprueba = document.querySelectorAll("temaprueba");
    elementosTemaprueba.forEach((item) =>
        item.classList.remove("activeselect")
    );
    const elementoClicado = document.getElementById(`temaprueba${numero}`);
    elementoClicado.classList.add("activeselect");
}
