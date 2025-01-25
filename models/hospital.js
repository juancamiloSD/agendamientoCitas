const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    sedes: [{
        type: String,
        // required: true,
    }],
    modulos: [{
        type: String,
        // required: true,
    }],
    img: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {collection: 'hospitales'});

HospitalSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Hospital', HospitalSchema);