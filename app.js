const express = require('express');
const {prueba} = require('./Routes/getPrueba');
const {decryptEsp, decryptEng} = require('./Routes/postDecrypt');
const {encryptEsp, encryptEng} = require('./Routes/postEncrypt');

const app = express();
const port = 2002;

app.get('/',  (req, res) => {
    res.send('<h1> holi </h1> <p> Bueno esto si funcionó </p>');
});

app.get('/prueba',  prueba);

app.post('/decrypt/esp', decryptEsp);
app.post('/decrypt/eng', decryptEng);

app.post('/encrypt/esp', encryptEsp);
app.post('/encrypt/eng', encryptEng);

app.listen(port, () => {
    console.log(`API is  listening on port: ${port}`)
});