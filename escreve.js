const fs = require('fs');

fs.writeFile('teste.txt', 'Hello', function(erro){
    if(erro){
        console.log('Não foi possível gravar o arquivo');
        console.log(erro);
    }else{
        console.log('O arquivo foi gravado!');
    }
});

console.log('oie');