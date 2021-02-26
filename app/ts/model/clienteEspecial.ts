class ClienteEspecial extends Cliente{

    private _dependentes: Clientes;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome,cpf,conta)
        this._dependentes = new Clientes;
    }
}