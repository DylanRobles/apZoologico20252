const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {

    res.send('ohllaaas+dsgñgasdasdsadad')

});

app.listen(port, () => {

    console.log('La aplicacion se esta ejecutando por el puerto' + port)


});