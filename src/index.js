import express from 'express';
import cors from "cors";
import tarea from '../src/routes/tarea.routes.js'
import usuario from '../src/routes/usuario.routes.js'

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.use(usuario)
app.use(tarea)


app.listen(3001);
console.log('Server on port 3001')