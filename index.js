const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crud_react'
})

app.get('/', (req, res) => {
    const sqlInsert = "Insert into crud_react.movie_reviews (movieName, movieReview) VALUES('Al filo del mañana', 'Buena película')";
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send("Hello World, se inserto un registro en la bd correctamente!.");
    });
    
})

app.listen(3001, () => {
    console.log("running on port 3001");
});