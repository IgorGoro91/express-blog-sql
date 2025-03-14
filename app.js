
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const postRoutes = require('./Routers/posts');

const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');



app.use(cors(
    {
        origin: 'http://localhost:5174'
    }

))


app.use( errorsHandler);



app.use(express.json())

app.use(express.static('public'))


app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.use(notFound)

app.listen(port, () =>{
    console.log(`prova del server ${port}`)
})