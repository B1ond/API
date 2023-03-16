const express = require('express')
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db/sa1.db3')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/sa1', (req, res) => {
    const data = req.body
    const request = `INSERT INTO TASK VALUES (
        null,
        '${data.title}',
        '${data.date}',
        '${data.description}',
        '${data.status}')`

    console.log(request)
    db.run(request, (err) => {
        if (err) {
            res.json(err)
        }
        res.json('Запись добавлена')
    })
})

app.listen(8000, () => {
    console.log('Server started in 8000');
})

app.get('/', (req, res) => {
    res.json('Good job')
})

