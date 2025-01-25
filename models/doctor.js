const { Schema, model } = require('mongoose');

const DoctorSchema = Schema({
    nombre: {
        required: true,
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    specialty: [{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Specialty'
    }],
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {collection: 'medicos'});

DoctorSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Doctor', DoctorSchema);