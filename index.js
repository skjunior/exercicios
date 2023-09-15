// resposta 1
//a) ele vai dizer se a pessoa é ou não apta para dirigir.
//b) a messagem "Alice pode dirigir" aparecera quando a idade for mair q 18 anos
// e a menssagem "Alice não pode dirigir" aparecera quando a idade for menor q 18 anos

// resposta 2
//a) esse código vai mostrar se o animasl é ou naõ carnivoro
//b) Leão é um animal carnivoro.

//Resposta 3
//a) esse código ira mostrar que o numero 5 é menor q 10 e que é um numero par.
//b) "o numero é maior do que 5"
// "o numero é par"

//B Exercicio de escrita
//1

let idade = prompt("Quantos anos você tem ?");
if (idade >= 18) {
    console.log('Você é maior de idade.');
} else{
    console.log('Você é menor de idade.');
}
//2
let turno = prompt('Em qual turno você estuda manhã, tarde ou noite?');
switch (turno.toUpperCase()) {
    case 'MANHÃ':
        console.log('Bom Dia!');
        break
        case 'TARDE':
            console.log('Boa Tarde!');
            break
            case 'NOITE':
            console.log('Boa Noite');
            default:
                
}
//3
// como eu ja tinha montado com swich case vou dar sequecia nas proximas.

//4

let aluno = {
    nome: prompt("Digite seu nome.").toUpperCase(),
    idade: prompt('Digite sua idade.').toUpperCase(),
    tipoDeCurso: prompt("responda com Sim ou Não: Você esta cursando algo?").toUpperCase(),
    temBolsa: prompt("É Bolsista?").toUpperCase(),
}

switch (aluno) {
    case Number (idade <= 30):
        break 
        case tipoDeCurso === 'SIM':
            break 
            case temBolsa === 'NÃO':
                console.log('Você pode se candidatar a uma bolsa de estudos.');
                break
                default:
                    console.log('Desculpe, você não atende aos requisitos para bolsa.');
}
