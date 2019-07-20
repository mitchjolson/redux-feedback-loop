const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/feedback', (req, res) => {
    console.log('GET /feedback')
    pool.query('SELECT * from feedback;')
        .then((result) => {res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error GET /feedback', error)
            res.sendStatus(500);
        })
});

app.post('/feedback', (req, res) => {
    console.log(req.body)
    const queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    const queryValues = [req.body.feel, req.body.understand, req.body.support, req.body.comment]
    pool.query(queryText, queryValues)
    .then((result) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log(error);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});