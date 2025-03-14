
const posts = require("../Data/posts.js");

const connection =require('../Data/db.js');

const { query } = require("express");
const { error } = require("console");

function index(req, res) {


// let filteredMenu = posts;

// // provaErrore.get()

//     if (req.query.tags) {
//         filteredMenu = posts.filter(post => {
//         return post.tags.includes(req.query.tags)}
// );
// }

//         res.json(filteredMenu);

        const sql = 'SELECT * FROM posts';

        connection.query(sql, (err,results) =>{
            if(err) return res.status(500).json({
                error: 'Errore nel server query error INDEX'
            })
            res.json(results)
        })
}






function show(req, res) {

const id = parseInt(req.params.id)


    const post = posts.find(post => post.id === id);
    
    if(!post){

        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Dolce non trovaro"
        })
    }

        res.json(post);
}






function store(req, res) {

    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
    id: newId,
    title: req.body.title,
    image: req.body.image,
    tags: req.body.tags
}

    posts.push(newPost);

    console.log(posts);


    res.status(201);
    res.json(newPost);

    // console.log(req.body); 
    // res.send('Creazione nuova post con dolce');

}




function update(req, res) {

    const id = parseInt(req.params.id)

    const post = posts.find(posts => posts.id === id);

        if (!posts) {
        res.status(404);
        return res.json({
        error: "Not Found",
        message: "Pizza non trovata"
})
}

    posts.title = req.body.title;
    posts.image = req.body.image;
    posts.tags = req.body.tags;

    console.log(posts)

    res.json(post);
}




function patch(req, res) {
    
    const id = parseInt(req.params.id)

    const post = posts.find(posts => posts.id === id);

        if (!posts) {
        res.status(404);
        return res.json({
        error: "Not Found",
        message: "Pizza non trovata"
})
}

    for( let key in req.body){
        post[key] = req.body[key];
    }
    // posts.title = req.body.title;
    // posts.image = req.body.image;
    // posts.tags = req.body.tags;

    console.log(posts)

    res.json(post);
    
}




function destroy(req, res) {

    const id = parseInt(req.params.id)


    const post = posts.find(post => post.id === id);
    
    if(!post){

        res.status(404);
        
        return res.json({
            error: "Not Found",
            message: "Dolce non trovaro"
        })
    }
    
    posts.splice(posts.indexOf(posts), 1);

    res.sendStatus(204)


}


// esportiamo tutto
module.exports = { index, show, store, update, patch, destroy };