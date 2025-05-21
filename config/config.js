const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('base de datos conectada con exito'); 

    } catch (err) {
        console.error(err);
        throw new Error('Error al intentar conectar con la base de datos');
    }
}

module.exports = {
    dbConnection,
}