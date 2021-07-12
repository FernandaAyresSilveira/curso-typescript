//Bolean

const contaPaga: boolean = false;


//number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome:string = 'Fernanda Silveira';

//Array
const idades: number[] = [23,28,45];
const idades2: Array<number> = [23,44,456];

//Tuple
let jogadores: [string, string, string];
jogadores = ['Vitor','Fulano','Ciclano'];

//Enum
enum StatusAprovacao{
    Aprovado ='001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornodaAPI = any[] = [123, 'Vitor', false];


//void
function printarNaTela(msg: string){
    console.log(msg);
}

//null e undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objecto : object){
    //
}
criar({
    propriedade:1,
})
//criar('victor) dá erro

//Never
function loopInfinito(): never{
    while(true){

    }
}

function erro (mensagem: srting){
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}


//ter umtipo ou outros tipos
//Union Types
const nota : string | number = 5;
function exibirNota(nota:number | string | boolean){
    console.log(`A nota é ${nota}`);
}

exibirNota('10');

//Alias
type Funcionario = {
    nome: string;
    sobrenome:string;
    dataNascimento: Date;

}
//type Funcionarios = Array<string>;
const funcionarios = Funcionario = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
},{
    nome: "Fulano",
    sobrenome: 'Farias',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    // ...
    for(let funcionario of fncionarios){
        console.log('Nome do funcionário: ',funcionario.nome);
    }
}

let altura: number | null = 1.6 ;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string | null;
}
const contato : Contato = {
    nome: "vitor",
    telefone1: '1234567895',
    telefone2: '5454571114'
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();

//const input = document.getElementById('numero1') as HTMLInputElement;
//const input = <HTMLInputElement>document.getElementById('numero1');
//console.log('input.value');


