/*
## Endpoints de la API
- POST /create: Endpoint para crear una publicación.
- GET /: Endpoint para traer todas las publicaciones.
- GET /id/:_id: Endpoint para buscar publicación por id.
- GET /title/:title: Endpoint para buscar una publicación por su titulo.
- PUT /id/:_id: Endpoint para actualizar una publicación.
- DELETE /id/:_id: Endpoint para eliminar una publicación.
*/

const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router.post('/create', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).send(post);

    } catch {
        res
            .status(500)
            .send({message: 'there was a problem trying to create de user'});
    }
})

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        console.error(err)
    }
})

module.exports = router;
