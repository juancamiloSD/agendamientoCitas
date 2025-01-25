const Hospital = require('../models/hospital');
const { response } = require('express');

const getHospitals = async(req, res = response) => {
    try {
        res.json({
            ok: true,
            msg: "getHospitales"
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg: "Error en la petición"
        })
    }
}

const createHospitals = async(req, res = response) => {

    /* 
        _id: id del hospital
        user: usuario que lo creo
    */
    const uid = req.uid;
    const hospital = new Hospital({
        user: uid,
        ...req.body
    });

    try {
        
        const hospitalDB = await hospital.save();
        res.json({
            ok: true,
            hospital: hospitalDB,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        })
    }

}

const updateHospitals = (req, res = response) => {
    res.json({
        ok: true,
        msg: "updateHospitals"
    })
}

const deleteHospitals = (req, res = response) => {
    res.json({
        ok: true,
        msg: "deleteHospitals"
    })
}

module.exports = {
    getHospitals,
    createHospitals,
    updateHospitals,
    deleteHospitals
}