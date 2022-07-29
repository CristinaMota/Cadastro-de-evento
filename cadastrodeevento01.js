let lista = []
let eventos = []
let datasdeeventos = []

var entrada = require ('readline-sync')

opcao ='s'
while(opcao == 's'){
    data = entrada.question("Data do Evento...: ");
    evento = entrada.question("Nome do Evento...: ");
    nome = entrada.question ("Digite o nome do paticipante: ")
    idade = entrada.question ("Digite a idade do participante: ")
    if (idade >= 18){
        if(lista.length <100){
            console.log("Cadastro permitido!!!")
            lista.push(nome)
        }
        else
            console.log("Cadastro não permitido, pois não atingiu o limite de 100")
    }    
    else{
        console.log("Cadastro não permitido pela idade.")
    }    
    opcao = ("Deseja cadastrar outro participante")
}

i = 1
while (i < lista.string){
    console.log(lista)
    i++
}