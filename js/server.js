import mysql from "mysql2";
import express from "express";
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'angel123',
    database: 'curso'
});

connection.connect((err) => {
    if (err) {
        console.log('Error al conectar la base de datos: ' + err.message);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

app.use(express.json());

//INSERTAR LOS DATOS DEL ESTUDIANTE A LA BASE DE DATOS
app.post('/registrar', (req, res) => {
    const { nombre, apellido, correo, contrasena } = req.body;

    const query = 'INSERT INTO Usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, correo, contrasena], (err, result) => {
        if (err) {
            console.error('Error al insertar datos en la base de datos: ' + err.message);
            res.status(500).send('Correo registrado');
        } else {
            console.log('Usuario registrado con éxito.');
            res.status(200).send('Usuario registrado con éxito.');
        }
    });
});

//VERIFICAR SI EL ESTUDIANTE ESTA REGISTRADO
app.get('/iniciar', (req, res) => {
    // const { correo, contrasena } = req.query;

    // Realiza una consulta a la base de datos para verificar las credenciales
    const consulta = 'select * from usuarios';
    connection.query(consulta, (error, resultados) => {
        if (error) {
            console.error('Error al consultar la base de datos: ' + error.message);
            res.status(500).send('Error en el servidor.');
        } else {
            res.json(resultados);
        }
    });
});

//TRAER EL CURSO
app.get('/cursos', (req, res) => {
    const consulta = `
      SELECT *
      FROM Cursos;
    `;
    connection.query(consulta, (error, resultados) => {
        if (error) {
            console.error('Error al realizar la consulta: ' + error.message);
            res.status(500).send('Error en el servidor.');
        } else {
            res.json(resultados);
        }
    });
});

//TRAER TODO EL CONTENIDO DEL CURSO
app.get('/contenido', (req, res) => {
    const consulta = `
    SELECT * from contenido_cursos;
    `;
    connection.query(consulta, (error, resultados) => {
        if (error) {
            console.error('Error al realizar la consulta: ' + error.message);
            res.status(500).send('Error en el servidor.');
        } else {
            res.json(resultados);
        }
    });
});

//INSERTAR INSCRIPCIONES A CURSOS
app.post('/inscripciones', (req, res) => {
    const { UsuarioID, CursoID, FechaInscripcion } = req.body;
    const query = 'INSERT INTO Inscripciones (UsuarioID, CursoID, FechaInscripcion) VALUES (?, ?, ?)';
    connection.query(query, [UsuarioID, CursoID, FechaInscripcion], (error, results) => {
        if (error) {
            console.error('Error al insertar la inscripción: ' + error.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(201).json({ message: 'Inscripción insertada correctamente' });
        }
    });
});

//VERIFICAR SI EL USUARIO YA SE INSCRIBIO AL CURSO
app.get('/verificarInscripcion', (req, res) => {
    const { UsuarioID, CursoID } = req.query;
    const query = 'SELECT * FROM Inscripciones WHERE UsuarioID = ? AND CursoID = ?';
    connection.query(query, [UsuarioID, CursoID], (error, results) => {
        if (error) {
            console.error('Error al verificar la inscripción: ' + error.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).json({ inscrito: results.length > 0 });
        }
    });
});

//TRAER DATOS DE CURSO QUE EL ESTUDIANTE SE INSCRIBIO
app.get('/cursos-usuario/:usuarioID', (req, res) => {
    const usuarioID = req.params.usuarioID;
    const query = `
        SELECT Inscripciones.FechaInscripcion, Cursos.portada, Cursos.TituloCurso, Cursos.duracion
        FROM Inscripciones
        JOIN Cursos ON Inscripciones.CursoID = Cursos.ID
        WHERE Inscripciones.UsuarioID = ?
    `;
    connection.query(query, [usuarioID], (error, results) => {
        if (error) {
            console.error('Error al obtener los cursos del usuario: ' + error.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(results);
        }
    });
});

//TRAER EL CONTENIDO ESPESIFICO DEL CURSO 
app.get('/recursos/:ID', (req, res) => {
    const ID = req.params.ID;
    const query = `
    SELECT * FROM contenido_cursos WHERE ID = ?;
    `;
    connection.query(query, [ID], (error, results) => {
        if (error) {
            console.error('Error al obtener los cursos del usuario: ' + error.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(results);
        }
    });
});

//REGISTRAR DATOS DE LA EMISION DE CERTIFICADO
app.post('/emiciondecertificado', (req, res) => {
    const { UsuarioID, CursoID, FechaEmision } = req.body;

    // Realiza la inserción en la base de datos
    const query = 'INSERT INTO certificados (UsuarioID, CursoID, FechaEmision) VALUES (?, ?, ?)';
    connection.query(query, [UsuarioID, CursoID, FechaEmision], (error, results) => {
        if (error) {
            console.error('Error al insertar la emision de certificado: ' + error.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(201).json({ message: 'Emision de certificado correctamente' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});