const fs = require('fs');
let numeros = [];

while(numeros.length < 6){
    let numero = Math.ceil(Math.random() * 60);

    if(numeros.indexOf(numero) === -1){
        numeros.push(numero);
    }
    
}

let numerosString = numeros.join('\n');//no windows é \r\n

fs.writeFile('mega-sena.txt', numerosString, function(erro){
    if(erro){
        console.log('Erro ao gravar o arquivo');
    }else{
        console.log('O arquivo foi gravado com os números ' + numerosString);
    }
});




