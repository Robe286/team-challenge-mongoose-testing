// - Post.js // Aqui ira el modelo de la publicación con los campos title, body y los timestamps.
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true}
}, {timestamps: true});

// Compilamos el modelo al schema:
// El primer argumento es el nombre en singular de la colección a la que pertenece el modelo.
// Mongoose busca automáticamente la versión en plural, en minúsculas, del nombre del modelo.
// Por lo tanto, el modelo "User" corresponde a la colección de users de la base de datos. 

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
