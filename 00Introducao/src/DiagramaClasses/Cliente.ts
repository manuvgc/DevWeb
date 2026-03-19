export default class Cliente{
    _nome: string;
    _cpf: string;
    _dataNascimento: string;
    _genero: string;
    _endereco: Endereco;
    _telefones: Telefone[];

    constructor(
        nome: string,
        cpf: string,
        dataNascimento: string,
        genero: string,
        endereco: Endereco,
        telefones: Telefone[]
    ){
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._genero = genero;
        this._endereco = endereco;
        this._telefones = telefones;
    }
}