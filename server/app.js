const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const { response } = require('express');
const app = express();

//use cors to allow cross origin resource sharing
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);
app.use(express.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/loginform', function (req, res) {
    let username = req.body["email"];
    let password = req.body["password"];

    pool.query('SELECT password FROM spotify_user WHERE email = $1 ', [username], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
        }
        console.log(results);
        console.log("LOGGING IN", username, password);
        console.log(results.rowCount);
        if (results.rowCount == 0) {
            res.json({
                body: "Failed"
            })
        } else {

            let temp_password = results.rows[0]['password']
            bcrypt.compare(password, temp_password, (error, pass_check) => {
                if (error) console.log(error);
                if (pass_check == false) {
                    console.log("Password does not exist")
                    res.json({
                        body: "Failed"
                    })

                } else {
                    console.log("SUCCESS")
                    res.json({
                        body: "Success"
                    })
                }
            });
        }
    })
});

app.post('/register', function (req, res) {
    let username = request.body["username"];
    // let name = request.body["name"];
    let email = request.body["email"];
    let password = request.body["password"];

    // Note: have to change 
    let usertype = 'user';
    let name = 'Chad'

    let hashedPassword = bcrypt.hash(password, 10);
    password = hashedPassword;

    pool.query('INSERT INTO spotify_user (username, password, name, email, user_type) VALUES ($1, $2, $3, $4, $5)', [username, password, name, email, usertype], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
        } else {
            console.log("SUCCESS")
            res.json({
                body: "Success"
            })
        }
    })
});

//start your server on port 3001
app.listen(5000, () => {
    console.log('Server Listening on port 5000');
});
