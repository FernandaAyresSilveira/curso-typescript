"use strict";
//Bolean
var contaPaga = false;
//number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = 'Fernanda Silveira';
//Array
var idades = [23, 28, 45];
var idades2 = [23, 44, 456];
//Tuple
var jogadores;
jogadores = ['Vitor', 'Fulano', 'Ciclano'];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornodaAPI = any[] = [123, 'Vitor', false];
//void
function printarNaTela(msg) {
    console.log(msg);
}
//null e undefined
var u = undefined;
var n = null;
//Object
function criar(objecto) {
    //
}
criar({
    propriedade: 1,
});
//criar('victor) dá erro
//Never
function loopInfinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//ter umtipo ou outros tipos
//Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
//type Funcionarios = Array<string>;
var funcionarios = Funcionario = [{
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }, {
        nome: "Fulano",
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    // ...
    for (var _i = 0, fncionarios_1 = fncionarios; _i < fncionarios_1.length; _i++) {
        var funcionario = fncionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: "vitor",
    telefone1: '1234567895',
    telefone2: '5454571114'
};
//Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
//(<number>minhaIdade).toString();
//const input = document.getElementById('numero1') as HTMLInputElement;
//const input = <HTMLInputElement>document.getElementById('numero1');
//console.log('input.value');
