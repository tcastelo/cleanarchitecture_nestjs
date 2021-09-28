import QuantidadeInvalidaError from "../exceptions/QuantidadeInvalidaError";
import ValorUnitarioInvalidoError from "../exceptions/ValorUnitarioInvalidoError";

export default class PedidoItem{
    produto_id: string;
    produto_nome: string;
    quantidade: number;
    valor_unitario: number;

    constructor(produto_id: string, produto_nome: string, quantidade:number, valor_unitario:number){
        this.produto_id = produto_id;
        this.produto_nome = produto_nome;
        this.quantidade = quantidade;
        this.valor_unitario = valor_unitario;

        if(this.quantidade <= 0) throw new QuantidadeInvalidaError("A quantidade do produto " + produto_nome + " deve ser maior que zero.");
        if(this.valor_unitario <= 0) throw new ValorUnitarioInvalidoError("A valor do produto " + produto_nome + " deve ser maior que zero.");
    }

    getTotal():number{
        return this.quantidade*this.valor_unitario;
    }

}