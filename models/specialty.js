const { Schema, model } = require('mongoose');

const SpecialtySchema = Schema({
    nombre: {
        type: String,
        require: true
    },
}, {collection: 'especialidades'});

SpecialtySchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Specialty', SpecialtySchema);