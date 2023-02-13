import pool from "../mysql.js";

export const creaUsuario = async (req, res) =>{

}

export const traeUsuario = async (req, res) => {
    const b = req.body;
    const respuesta  = await pool.query(`select id, nusuario from usuario where nusuario="${b.nusuario}" and pass="${b.pass}"`)
    respuesta.length===1 ? res.json({auth:true, id:respuesta[0], mensaje:'Se ha logueado'}) : res.json({auth:false, id:null, mensaje:'No se ha podido loguear'});
}
