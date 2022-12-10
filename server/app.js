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

// app.use(express.static(path.resolve(__dirname, "../build")));

app.post('/loginform', function (req, res) {
    let email = req.body["email"];
    let password = req.body["password"];

    pool.query('SELECT password FROM spotify_user WHERE email = $1 ', [email], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
        }

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
                    pool.query('SELECT username, user_type FROM spotify_user WHERE email = $1', [email], (error, results) => {
                        if (error) {
                            res.json({
                                body: "Failed"
                            })
                        }
                        else {
                            res.json({
                                body: "Success",
                                username: results['rows'][0]['username'],
                                usertype: results['rows'][0]['user_type'],
                            })
                        }
                    })
                    // res.json({
                    //     body: "Success",
                    //     username: username,
                    // })
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
            throw (error)
        } else {
            if (usertype == "artist") {
                let artist_name = username + "_artist";
                pool.query('INSERT INTO spotify_artist (username, artist_name) VALUES ($1, $2)', [username, artist_name], (error, results) => {
                    if (error) {
                        res.json({
                            body: "Failed"
                        })
                        throw (error)
                    } else {
                        console.log("SUCCESS")
                        res.json({
                            body: "Success",
                            username: username,
                            usertype: usertype,
                        })
                    }
                })
            } else {
                res.json({
                    body: "Success",
                    username: username,
                    usertype: usertype,
                })
            }
        }
    })

    
});
app.post('/updatepassword', async function (req, res) {
    let email = req.body["email"];
    let old_password = req.body["oldPassword"];
    let new_password = req.body["newPassword"];
    let hashedPassword = await bcrypt.hash(new_password, 10);
    pool.query('SELECT password FROM spotify_user WHERE email = $1', [email], (error, results) => {
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
                    pool.query('UPDATE spotify_user SET password = $1 WHERE email = $2', [hashedPassword, email], (error, results) => {
                        if (error) {
                            res.json({
                                body: "Failed"
                            })
                        }
                        else {
                            console.log(hashedPassword)
                            res.json({
                                body: "Success"
                                // username: username,
                            })
                        }
                    })
                }
            });
        }
    })
});
// Upload song and metadata
app.post('/uploadsong', async function (req, res) {
    let username = req.body["artistName"];
    let song_name = req.body["songName"];
    let artist_name = req.body["artistName"];
    let album_name = req.body["albumName"];
    let song_path = req.body["songPath"];

    let new_artist_name = artist_name.split(' ').join('');
    console.log(new_artist_name);

    pool.query('INSERT INTO spotify_song (song_name, artist_name, album_name, username, song_path) VALUES ($1, $2, $3, $4, $5)', [song_name, new_artist_name + "_artist", album_name, username, song_path], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
            console.log(error)
            throw (error)
        } else {
            pool.query('INSERT INTO spotify_album (album_name, song_id, display_name) VALUES ($1, (select song_id from spotify_song where song_name = $2 and username = $3), $4)', [album_name, song_name, username, new_artist_name + "_artist"], (error, results) => {
                if (error) {
                    res.json({
                        body: "Failed"
                    })
                console.log(error)
                throw (error)
                } else {
                    console.log("SUCCESS")
                    res.json({
                        body: "Success",
                        username: username
                    })
                }
            })
        }
    })
});

// app.post('/deletesong', async function (req, res) {

//     pool.query('INSERT INTO spotify_song (song_name, artist_name, album_name, username, song_path) VALUES ($1, $2, $3, $4, $5)', [song_name, artist_name, album_name, username, song_path], (error, results) => {
//         if (error) {
//             res.json({
//                 body: "Failed"
//             })
//             throw (error)
//         } else {
//             console.log("SUCCESS")
//             res.json({
//                 body: "Success",
//                 username: username
//             })
//         }
//     })
// });
app.delete('/settings/:email', async function (req, res) {

    console.log("HELLO", req.body)
    let email = req.params["email"];

    console.log(email)

    pool.query('DELETE FROM spotify_user WHERE email = $1', [email], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
        }
        else {
            res.json({
                body: "Success"
            })
        }
    })
});

app.delete('/deletesong/:email/:song', async function (req, res) {

    console.log("HELLO", req.body)
    let email = req.params["email"];
    let song = req.params["song"];
    let new_song = song.split('%').join('');
    let new_email = email.split('%').join('');
    console.log(new_email)
    console.log(new_song)

    pool.query('SELECT song_id FROM spotify_song WHERE song_name = $1 and username = $2', [new_song, new_email], (error, results) => {
        if (results.rowCount == 0) {
            res.json({
                body: "Failed"
            })
        }
        else {
            let song_id = results['rows'][0]['song_id']
            console.log(song_id)
            pool.query('DELETE FROM spotify_album WHERE song_id = $1', [song_id], (error, results) => {
                if (error) {
                    console.log(error)
                    res.json({
                        body: "Failed"
                    })
                }
                else {
                    console.log("deleted from album");
                    pool.query('DELETE FROM spotify_liked_songs WHERE song_id = $1', [song_id], (error, results) => {
                        if (error) {
                            console.log(error)
                            res.json({
                                body: "Failed"
                            })
                        }
                        else {
                            console.log("deleted from liked songs")
                            pool.query('DELETE FROM spotify_song WHERE song_name = $1 and username = $2', [new_song, new_email], (error, results) => {
                                if (error) {
                                    console.log(error)
                                    res.json({
                                        body: "Failed"
                                    })
                                }
                                else {
                                    console.log("deleted")
                                    res.json({
                                        body: "Success"
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
    
    
    
});


app.get('/getlikedsongs/:email', async function (req, res) {
    let email = req.params["email"];
    pool.query('SELECT song_id, song_name, username, album_name, song_path FROM spotify_song WHERE song_id IN (SELECT song_id FROM spotify_liked_songs WHERE email = $1 )', [email], (error, results) => {
        if (results.rowCount == 0) {
            res.json({
                body: "Failed"
            })
        }
        else {
            var arr = []
            for (var i = 0; i < results['rows'].length; i++) {
                let jsonobj = {
                    songname: results['rows'][i]["song_name"],
                    artistname: results['rows'][i]["username"],
                    Albumname: results['rows'][i]["album_name"],
                    songlink: results['rows'][i]["song_path"],
                    song_id: results['rows'][i]["song_id"],
                }
                arr.push(jsonobj)
            }
            res.json({
                body: "Success",
                data: arr,
            })
        }
    })
});

app.post('/likesong', async function (req, res) {
    let email = req.body["email"];
    let song_id = req.body["song_id"];
    pool.query('INSERT INTO spotify_liked_songs (email, song_id) VALUES ($1, $2)', [email, song_id], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
            throw (error)
        } else {
            res.json({
                body: "Success",
            })
        }
    })
});
app.get('/search/:keyword/:email', async function (req, res) {
    let keyword = req.params["keyword"];
    let email = req.params["email"];
    pool.query(`SELECT * FROM spotify_song WHERE song_name LIKE '${keyword}%'`, (error, results) => {
        console.log(results)
        if (results.rowCount == 0) {
            res.json({
                body: "Failed"
            })
        }
        else {
            var arr = []

            for (var i = 0; i < results['rows'].length; i++) {

                let jsonobj = {
                    song_id: results['rows'][i]["song_id"],
                    songname: results['rows'][i]["song_name"],
                    artistname: results['rows'][i]["username"],
                    Albumname: results['rows'][i]["album_name"],
                    songlink: results['rows'][i]["song_path"],
                }
                arr.push(jsonobj)
            }
            res.json({
                body: "Success",
                data: arr,
            })
        }
    })
});

app.get('/getallsongs', async function (req, res) {
    pool.query(`SELECT * FROM spotify_song`, (error, results) => {
        console.log(results)
        if (results.rowCount == 0) {
            res.json({
                body: "Failed"
            })
        }
        else {
            var arr = []

            for (var i = 0; i < results['rows'].length; i++) {

                let jsonobj = {
                    song_id: results['rows'][i]["song_id"],
                    songname: results['rows'][i]["song_name"],
                    artistname: results['rows'][i]["username"],
                    Albumname: results['rows'][i]["album_name"],
                    songlink: results['rows'][i]["song_path"],
                }
                arr.push(jsonobj)
            }
            res.json({
                body: "Success",
                data: arr,
            })
        }
    })
});

app.post('/unlikesong', async function (req, res) {
    let email = req.body["email"];
    let song_id = req.body["song_id"];
    console.log(email, song_id)
    pool.query('DELETE FROM spotify_liked_songs WHERE email = $1 AND song_id = $2', [email, song_id], (error, results) => {
        if (error) {
            res.json({
                body: "Failed"
            })
            throw (error)
        } else {
            res.json({
                body: "Success",
            })
        }
    })
});

app.get('/*', function (req, res) {
    res.send("Server started!");
  });

//start your server on port 3001

app.listen(process.env.PORT, () => {
    console.log('Server Listening on port', process.env.PORT);
});