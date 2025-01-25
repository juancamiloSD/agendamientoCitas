const Specialty = require('../models/specialty');
const { response } = require('express');

const getSpecialty = async(req, res = response) => {

    const specialty = await Specialty.find({}, 'nombre');

    try {
        if(specialty){
            res.json({
                ok: true,
                specialty,
            })
        }else{
            res.status(500).json({
                ok: false,
                msg: "No hay especialidades disponibles"
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        })
    }
}

const createSpecialty = async(req, res = response) => {
    const { nombre } = req.body;

    try {
        const existNombre = await Specialty.findOne({ nombre });
        if(existNombre){
            return res.status(400).json({
                ok: false,
                msg: "El nombre ya esta registrado"
            });
        }
        const specialty = new Specialty(req.body);

        // Guardar usuario
        await specialty.save();
    
        res.json({
            ok: true,
            specialty,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        });
    }
}

const updateSpecialty = async(req, res = response) => {
    const id = req.params.id;

    try {
        const specialtyDB = await Specialty.findById( id );

        if(!specialtyDB){
            return res.status(400).json({
                ok: false,
                msg: "No existe una especialidad con ese id"
            })
        }
        
        // Actualizaciones
        const {nombre, ...fields} = req.body;

        if(specialtyDB.nombre != nombre){
            const existNombre = await Specialty.findOne({ nombre });
            if(existNombre){
                return res.status(400).json({
                    ok: false,
                    msg: "Ya existe una especialidad con ese nombre"
                })
            }
        }

        fields.nombre = nombre;
        const specialtyUpdated = await Specialty.findByIdAndUpdate(id, fields, { new: true });

        res.json({
            ok: true,
            user: specialtyUpdated,
        })
    } catch (error) {
        res.status(500).json({
            opk: false,
            msg: "Error inesperado"
        })
    }
}

const deleteSpecialty = async(req, res = response) => {
    const id  = req.params.id;
    try {
        const specialtyDB = await Specialty.findById( id );

        if(!specialtyDB){
            return res.status(400).json({
                ok: false,
                msg: "No existe una especialidad con ese id"
            })
        }
        await Specialty.findByIdAndDelete(id);
        res.json({
            ok: true,
            msn: "Especialidad eliminada"
        })
    } catch (error) {
        res.status(500).json({
            opk: false,
            msg: "Error inesperado"
        })
    }
}

module.exports = {
    getSpecialty,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty
}