var entrada = require('readline-sync');

do{
    idade = entrada.question("Informe sua idade..: ");
    if (idade >= 16){
        console.log("permitido participar");
    }else{
        console.log("não permitido participar");
    }
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
} while(opcao == 's')