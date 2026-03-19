export default class Venda{
    _codigo: number;
    _data: string;
    _cliente: Cliente;
    _produtos: Produto[];

    constructor(codigo: number, data: string, cliente: Cliente, produtos: Produto[]){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos

    }

    calcularTotal(): number{
        return numeroHipotetico;
    }
}