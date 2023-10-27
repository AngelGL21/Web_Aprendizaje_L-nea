
//SOLICITUD AL SERVIDOR PARA REGISTRAR ESTUDIANTE
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const contrasena1 = document.getElementById("contra1").value;
        const contrasena2 = document.getElementById("contra2").value;

        // Validaciones
        if (!nombre || !apellido || !correo || !contrasena1 || !contrasena2) {
            alert("Por favor, complete todos los campos.");
        } else if (contrasena1 !== contrasena2) {
            alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
        } else {
            // Enviar datos al servidor
            fetch("http://localhost:3000/registrar", {
                method: "POST",
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    contrasena: contrasena1,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.text())
                .then((data) => {
                    if (data === "Correo registrado") {
                        alert(
                            "El correo ya está registrado. Por favor, utilice otro correo."
                        );
                    } else {
                        alert(data);
                    }
                })
                .catch((error) => {
                    console.error("Error al enviar datos al servidor:", error);
                });
        }
    });
});


// SOLICITUD PARA VERIFICAR SI EL ESTUDIANTE ESTA REGISTRADO E INICIAR SESION
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#sesion");
    const iniciarBtn = document.getElementById("iniciarBtn");

    iniciarBtn.addEventListener("click", function () {
        const correos = document.querySelector("#correo").value;
        const contrasenas = document.querySelector("#contra").value;

        fetch(`http://localhost:3000/iniciar`)
            .then((response) => response.json())
            .then((data) => {
                let varible = false;
                for (let i = 0; i < data.length; i++) {
                    const correo = data[i].correo;
                    const contrasena = data[i].contrasena;
                    const nombre = data[i].nombre;
                    const apellido = data[i].apellido;
                    const id = data[i].ID;
                    if ((correo === correos) & (contrasena === contrasenas)) {
                        varible = true;
                        sessionStorage.setItem("id", id)
                        sessionStorage.setItem("nombre", nombre);
                        sessionStorage.setItem("apellido", apellido);
                    }
                }
                if (varible) {
                    window.location.href = "/public/user.html";
                } else {
                    alert("Credenciales incorrectas. Inténtalo de nuevo.");
                }
            })
            .catch((error) => {
                console.error("Error al iniciar sesión:", error);
            });
    });
});

const ide = sessionStorage.getItem("id");
// console.log("ID USUARIO INICIA SESISON " + ide);

//OBTENER EL NOMBRE Y APELLIDO PARA MOSTRAR EL ESTUDIANTE QUE INICIO SESION
const nombre = sessionStorage.getItem("nombre");
const apellido = sessionStorage.getItem("apellido");
document.addEventListener("DOMContentLoaded", (ev) => {
    const nombreCompleto = document.getElementById("nombreCompleto");

    if (nombre !== null && apellido !== null) {
        nombreCompleto.textContent = nombre + " " + apellido;
    } else {
        nombreCompleto.textContent = "Nombre no disponible";
    }
});

//OBTENER LA PRIMERA LETRA EL NOMBRE DE ESTUDIANTE
document.addEventListener("DOMContentLoaded", (ev) => {
    const nombr = nombre;
    const primeraLetra = nombr[0].toUpperCase();
    document.getElementById("letra").textContent = primeraLetra;
    // console.log(primeraLetra);
});

//VERIFICAR SI EL ESTUDIANTE YA INICIO EL CURSO Y SI NO INSERTAR SU INSCRIPCION
function insertarIns() {
    const ide = sessionStorage.getItem("id");
    const CursoID = 1;
    const fechaActual = new Date().toISOString().slice(0, 10);

    // Realizar una consulta para verificar si el usuario ya está inscrito en el curso
    fetch(`http://localhost:3000/verificarInscripcion?UsuarioID=${ide}&CursoID=${CursoID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.inscrito) {
                // El usuario ya está inscrito en el curso, mostrar alerta
                alert('Ya estás inscrito a este curso.');
            } else {
                // El usuario no está inscrito, proceder con la inscripción
                const datosInscripcion = {
                    UsuarioID: ide,
                    CursoID: CursoID,
                    FechaInscripcion: fechaActual
                };

                fetch('http://localhost:3000/inscripciones', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosInscripcion)
                })
                    .then(response => response.json())
                    .then(data => {
                        alert('Te has inscrito al curso.');
                        console.log(data.message);
                    })
                    .catch(error => {
                        console.error('Error al realizar la inscripción:', error);
                    });
            }
        })
        .catch(error => {
            console.error('Error al verificar la inscripción:', error);
        });
}

//MOSTRAR LOS CURSO QUE EL ESTUDIANTE ESTÁ INSCRITO
function miscursos() {
    const usuarioID = sessionStorage.getItem('id');
    const cursosContainer = document.getElementById('miscursos');

    fetch(`http://localhost:3000/cursos-usuario/${usuarioID}`)
        .then(response => response.json())
        .then(data => {
            cursosContainer.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                const curso = data[i];
                //Insertar html para que los cursos se vean
                cursosContainer.innerHTML += `
                    <div class="curso-card">
                        <img src="${curso.portada}" class="curso-portada">
                        <h3>${curso.TituloCurso}</h3>
                        <p>Duración: ${curso.duracion}</p>
                        <p>Fecha de inicio: ${curso.FechaInscripcion}</p>
                        <button id="btncurso" onclick="cambiarContenido('3')">Esntrar al curso</button>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error al obtener los cursos del usuario:', error);
        });
}

//INSERTAR LOS DATOS EN LA CUAL EL ESTUDIANTE IMPRIMIO SU CERTIFICADO
function emisionCertificado() {
    const ide = sessionStorage.getItem("id");
    const CursoID = 1;
    const fechaActual = new Date().toISOString().slice(0, 10);

    // Datos a enviar
    const datosEmision = {
        UsuarioID: ide,
        CursoID: CursoID,
        FechaEmision: fechaActual
    };

    // Realizamos la solicitud al servidor
    fetch('http://localhost:3000/emiciondecertificado', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosEmision)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
            console.error(); ('Error al realizar la emision:', error);
        });
};