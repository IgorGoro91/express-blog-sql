/* scaricare in terminale npm i mysql2*/
/* dopo scrivere il codice per connettersi con database*/

const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'posts_db'

})

connection.connect((err) =>{
    if(err) throw err;

    console.log('Connected to MySQL!')
})

module.exports = connection


