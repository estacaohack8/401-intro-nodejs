const fs = require('fs');
const dados = require('./dados.json');
const pais = process.argv[2];
let dadosCsv = 'name;company;country\n';
let quantidade = 0;

for(let pessoa of dados){
    if(pessoa.country === pais){
        dadosCsv += `${pessoa.name};${pessoa.company};${pessoa.country}\n`;
        quantidade++;
    }
}

// let dadosFiltradosString = JSON.stringify(dadosFiltrados);

fs.writeFile('dados-filtrados.csv', dadosCsv, function(deuRuim){
    if(deuRuim){
        console.log('Deu ruim!');
        console.log(deuRuim);
        return;
    }

    console.log('Foram gravados ' + quantidade + ' registros.');
});