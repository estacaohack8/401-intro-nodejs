const fs = require('fs');

fs.readFile('dados-filtrados.csv', {encoding: 'UTF-8'}, function(erro, dados){
    console.log(erro);
    console.log(dados);
});