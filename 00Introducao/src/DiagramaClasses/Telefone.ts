export default class Telefone{
    _ddd: string;
    _numero: number;
    _tipo: string;

    constructor(ddd: string, numero: number, tipo: string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }
}