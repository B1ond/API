const express = require("express");
const sqlite3 = require('sqlite3');


var app = express();


app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})

app.get('/', (req, res) => {
    res.json('Молодец')
})