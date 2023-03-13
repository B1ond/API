const express = require('express')
const sqlite3 = require('sqlite3')

const db = new sqlite.Database('./db/steam.db')

let app = express()

app.listen(8000, () => {
    console.log('Server started in 8000');
});

app.get('/', (req , res ) => {
    res.json('Good job');
});

