const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const { response, request } = require('express');
const app = express();

//use cors to allow cross origin resource sharing
app.use(
    cors()
);
app.use(express.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/loginform', function (req, res) {
    let username = req.body["email"];
    let password = req.body["password"];
    console.log(username, password);

    // pool.query('SELECT song_path FROM spotify_song WHERE username = $1', [username], (error, results) => {
    //     console.log("" + (results['rows'][1]['song_path']));
    //     res.json({
    //         body: results['rows'][1]['song_path']
    //     })
    // });
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

app.post('/register', async function (req, res) {
    let username = req.body["username"];
    let name = req.body["username"];
    let email = req.body["email"];
    let password = req.body["password"];
    let usertype = req.body["usertype"];

    let hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password is: ", hashedPassword);
    password = hashedPassword;

    pool.query('INSERT INTO spotify_user (username, password, name, email, user_type) VALUES ($1, $2, $3, $4, $5)', [username, hashedPassword, name, email, usertype], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
            throw(error)
        } else {
            console.log("SUCCESS")
            res.json({
                body: "Success"
            })
        }
    })
});
app.post('/updatepassword', async function (req, res) {
    let username = req.body["email"];
    let old_password = req.body["oldPassword"];
    let new_password = req.body["newPassword"];
    let hashedPassword = await bcrypt.hash(new_password, 10);
    pool.query('SELECT password FROM spotify_user WHERE email = $1', [username], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rowCount == 0) {
            res.json({
                body: "Failed"
            })
        } else {
            let temp_old_password = results.rows[0]['password']
            bcrypt.compare(old_password, temp_old_password, (error, pass_check) => {
                if (error) {
                    res.json({
                        body: "Failed"
                    })
                }
                if (pass_check == false) {
                    res.json({
                        body: "Failed"
                    })
                } else {
                    pool.query('UPDATE spotify_user SET password = $1 WHERE email = $2', [hashedPassword, username], (error, results) => {
                        if (error) {
                            res.json({
                                body: "Failed"
                            })
                        }
                        else {
                            console.log(hashedPassword)
                            res.json({
                                body: "Success"
                            })
                        }
                    })
                }
            });
        }
    })
});

//start your server on port 3001
app.listen(5000, () => {
    console.log('Server Listening on port 5000');
});
