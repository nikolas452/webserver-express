const http = require('http');



http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'aplication:json' })
    let salida = { nombre: 'Nicolas', edad: 26, url: req.url }
    res.write(JSON.stringify(salida));
    res.end();

})

.listen(8080);