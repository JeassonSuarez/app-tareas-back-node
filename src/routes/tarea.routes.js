import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, obtenerTareas } from "../controllers/tarea.controller.js";

const tarea = Router();

tarea.get('/', obtenerTareas)
tarea.post('/', crearTarea)
tarea.put('/', actualizarTarea)
tarea.delete('/', eliminarTarea)

export default tarea;