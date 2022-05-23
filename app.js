const express = require('express');

const app = express();
const port = 2002;

app.get('/',  (req, res) => {
    res.send('holi, Bueno esto si funcionó');
});

app.get('/pepito',  (req, res) => {
    res.send('Entró a pepito');
});

app.listen(port, () => {
    console.log(`API is  listening on port: ${port}`)
});