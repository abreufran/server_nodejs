const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crud_react'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlSelect = "Select * from movie_reviews";
    db.query(sqlSelect, (err, result) => {
        if(err) {
            console.log(err);
        }
        
        res.send(result);
    });
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

app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "Insert into crud_react.movie_reviews (movieName, movieReview) VALUES(?, ?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
    })
});

app.listen(3001, () => {
    console.log("running on port 3001");
});