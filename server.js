const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + 'public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



const port = process.env.PORT || 3000;
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Nicolas',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});