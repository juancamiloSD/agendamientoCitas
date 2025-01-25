/*
    Path: /api/hospitales
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
    getHospitals,
    createHospitals,
    updateHospitals,
    deleteHospitals
} = require('../controllers/hospitals');


const router = Router();

router.get('/', 
    getHospitals
);

router.post('/', 
    [
        validateJWT,
        check('nombre', 'El nombre del hospital es obligatorio').not().isEmpty(),
        validateFields
    ], 
    createHospitals
);

router.put('/:id', 
    [],
    updateHospitals
);

router.delete('/:id', 
    deleteHospitals
);

module.exports = router;