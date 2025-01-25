/*
    Path: /api/especialidades
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
    getSpecialty,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty
} = require('../controllers/specialties');


const router = Router();

router.get('/', 
    getSpecialty
);

router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validateFields,
    ], 
    createSpecialty
);

router.put('/:id', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validateFields,
    ],
    updateSpecialty
);

router.delete('/:id', 
    deleteSpecialty
);

module.exports = router;