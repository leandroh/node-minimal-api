var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/maps', function(req, res) {
  var dados = [
    {
      lat: -25.470991, 
      lon: -49.271036
    },
    {
      lat: -0.935586,
      lon: -49.635540
    },
    {
      lat: -2.485874, 
      lon: -43.128493
    }
  ];

  res.send(JSON.stringify(dados));
});

app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});
