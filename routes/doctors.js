/*
    Path: /api/medicos
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
    getDoctors,
    createDoctors,
    updateDoctors,
    deleteDoctors
} = require('../controllers/doctors');


const router = Router();

router.get('/', 
    getDoctors
);

router.post('/', 
    [], 
    createDoctors
);

router.put('/:id', 
    [],
    updateDoctors
);

router.delete('/:id', 
    deleteDoctors
);

module.exports = router;