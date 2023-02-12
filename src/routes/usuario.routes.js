import { Router } from "express";
import { creaUsuario, traeUsuario } from "../controllers/usuario.controller.js";
 
const usuario = Router();

usuario.get('/', traeUsuario)
usuario.post('/', creaUsuario)

export default usuario;