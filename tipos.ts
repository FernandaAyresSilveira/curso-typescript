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
