import pool from "../mysql.js";

export const crearTarea = async (req, res) => {
    console.log(req.body);
    const idusuario = req.body.idusuario;
    const {titulo,
    descripcion,
    fEntrega,
    fCreacion,
    fFinalizacion,
    prioridad,
    estado,
    categoria} = req.body.nuevaTarea;
    const respuesta = await pool.query(`insert into tarea (id, ntarea, descripcion, fcreacion, fentrega, ffinalizacion, prioridad, estado, categoria) values ("${idusuario}", "${titulo}", "${descripcion}", STR_TO_DATE('${fCreacion}', '%Y-%m-%d'), STR_TO_DATE('${fEntrega}', '%Y-%m-%d'), null, "${prioridad}", "${estado}", "${categoria}")`)
    console.log(respuesta);
    respuesta.affectedRows===1 ? res.json({creacion:true, mensaje:'Se ha creado la tarea'}) : res.json({creacion:false, mensaje:'No se ha podido crear la tarea'})
}

export const obtenerTareas = async (req, res) => {
    const respuesta = await pool.query(`select * from tarea where id="${req.params.idcliente}" and NOT estado="D"`)
    respuesta.length > 0 ? res.json({hay:true, respuesta, mensaje:'Cargando tareas...'}) : res.json({hay:false, respuesta, mensaje:'No ha agregado tareas aun...'})
}

export const actualizarTarea = async (req, res) => {
    console.log(req.body);
    const respuesta = await pool.query(`update tarea set estado="F", ffinalizacion=NOW() where idtarea="${req.body.IDTAREA}"`)
    respuesta.affectedRows===1 ? res.json({fin:true, mensaje:'Se ha finalizado la tarea'}) : res.json({fin:false, mensaje:'No se ha finalizado la tarea'})
    // console.log('aca',respuesta);
}

export const eliminarTarea = async (req, res) => {
    const respuesta = await pool.query(`update tarea set estado="D" where idtarea="${req.body.IDTAREA}"`)
    respuesta.affectedRows===1 ? res.json({del:true, mensaje:'Se ha eliminado la tarea'}) : res.json({del:false, mensaje:'No se ha eliminado la tarea'})
}

export const cambiarPrioridad = async (req, res) => {
    const respuesta = await pool.query(`update tarea set prioridad="${req.body.p}" where idtarea="${req.body.idt}"`)
    respuesta.affectedRows===1 ? res.json({cp:true, mensaje:'Se ha cambiado la prioridad de la tarea'}) : res.json({cp:false, mensaje:'No se ha cambiado la prioridad de la tarea'})
}