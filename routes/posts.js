const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router.post('/create', async (req, res) => {
    try {
        const post = await Post.create({title:req.body.title, body:req.body.body});
        res.status(201).send(post);
        
    } catch (error){
        res
        .status(500)
        .send({message: 'there was a problem trying to create the post'});
    }
});

router.get("/", async (req, res)=> {
    try {
        const posts = await Post.find();
        res.status(200).send (posts);
    } catch (error) {
        console.error(error)
        res.status(500).send ({message:"Thre was a problem getting the posts"});
    }
});

router.get('/id/:_id', async (req, res) => {
    try {
        const post = await Post.findById(req.params._id);
        if (!post) {
            return res.status(404).send({menssaje: 'post not found'});
        }
        res.status(200).send (post);

    } catch (error) {
        console.error(error)
        res.status(500).send({message: 'There was a problem trying to get the post'});
    }
});

router.get('/title/:title', async (req, res) => {
    try {
        const post = await Post.find({title: req.params.title});
        if (!post) {
            return res.status(404).send({message: 'post not found'});
        }
        res.status(200).send(post);

    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'There was a problem trying to get the post'});
    }
});

router.put('/id/:_id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params._id, {title: req.body.title, body: req.body.body});
        if (!post) {
            return res.status(404).send({mensaje: 'post not found'});
        }
        res.status(200).send(post);
    
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Therer was a problem trying to put the post'});
    }
});

router.delete('/id/:_id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params._id);
        if (!post) {
            return res.status(404).send({message: 'post not found'});
        }
        res.status(200).send({message: 'delete was complete'});

    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'There was a problem trying to delete the post'});
    }
});

module.exports = router;







/*
## Endpoints de la API
- POST /create: Endpoint para crear una publicación.
- GET /: Endpoint para traer todas las publicaciones.
- GET /id/:_id: Endpoint para buscar publicación por id.
- GET /title/:title: Endpoint para buscar una publicación por su titulo.
- PUT /id/:_id: Endpoint para actualizar una publicación.
- DELETE /id/:_id: Endpoint para eliminar una publicación.
*/