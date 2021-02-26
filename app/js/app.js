let contaController = new ContaController();
contaController.listar();
let clienteController = new ClienteController();
clienteController.listar();
const conta1 = new Conta('1', 100);
const poupanca1 = new Poupanca('2', 100);
const contaBonif1 = new ContaBonificada('3', 0);
const cliente1 = new Cliente('Ana', '123456', conta1);
console.log('Conta: ' + conta1.saldo);
poupanca1.atualizarSaldoAniversario();
console.log('Poupanca: ' + poupanca1.saldo);
contaBonif1.creditar(100);
console.log('Conta Bonificada: ' + contaBonif1.saldo);
console.log('Cliente: ' + cliente1.nome);
//-----------------------------------------------------------------//
const listaClientes = new Clientes();
const cli1 = new Cliente('Joao', '121212', new Conta('1', 100));
const cli2 = new Cliente('Maria', '131313', new Conta('2', 400));
listaClientes.inserir(cli1);
listaClientes.inserir(cli2);
console.log('Lista Clientes: ' + listaClientes.listar()
    .map(function (cli) { return cli.nome + ' '; }));
console.log('Cliente com cpf "121212": ' + listaClientes.pesquisar('121212').nome);
listaClientes.remover('121212');
console.log('Lista após remoção: ' + listaClientes.listar()
    .map(function (cli) { return cli.nome + ' '; }));
/*

Dicas Iniciando:

Quando importar um projeto, lembre que o node-modules e os
packages não necessariamente serão ideais para seu projeto local,
então atualize eles.

npm init
npm install typescript ( ou manualmente )
add "compile": "tsc" no package.json
npm run compile

-------------------------------------------------------------

Outras Dicas:

adicionar
    "noEmitOnError": true,
    "noImplicitAny": true
no tsconfig.json

adicionar
    "start": "tsc -w"
no package.json para automatizar a compilação


*/ 
