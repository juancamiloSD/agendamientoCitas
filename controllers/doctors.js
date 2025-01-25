const { response } = require('express');

const getDoctors = (req, res = response) => {
    res.json({
        ok: true,
        msg: "getDoctors"
    })
}

const createDoctors = (req, res = response) => {
    res.json({
        ok: true,
        msg: "createDoctors"
    })
}

const updateDoctors = (req, res = response) => {
    res.json({
        ok: true,
        msg: "updateDoctors"
    })
}

const deleteDoctors = (req, res = response) => {
    res.json({
        ok: true,
        msg: "deleteDoctors"
    })
}

module.exports = {
    getDoctors,
    createDoctors,
    updateDoctors,
    deleteDoctors
}