import Cupom from "./Cupom";
import IEntity from "./IEntity";
import CupomInvalidoError from "./exceptions/CupomInvalidoError";
import Endereco from "./value_objects/Endereco";
import PedidoItem from "./value_objects/PedidoItem";
import PedidoStatus from "./value_objects/PedidoStatus";
import PedidoStatusInvalidoError from "./exceptions/PedidoStatusInvalidoError";

export default class Pedido implements IEntity{
    
    codigo: string;
    data: Date
    sequencia: number;
    endereco: Endereco;
    items: PedidoItem[];
    cupom: Cupom;
    status: PedidoStatus;

    constructor(data: Date, sequencia: number, endereco:Endereco, status?: PedidoStatus){
        this.data = data;
        this.sequencia = sequencia;
        this.endereco = endereco;

        if(status) this.status = status;
    }

    adicionarItem(item: PedidoItem){
        this.items.push(item);
    }

    adicionarCupom(cupom: Cupom){
        if(!cupom.isCupomValido()) throw new CupomInvalidoError("O cupom [" + cupom.codigo + "] está expirado.");
        this.cupom = cupom;
    }

    atualizarStatus(novoStatus: PedidoStatus){
        if(!this.status.validaStatus(novoStatus)) throw new PedidoStatusInvalidoError("O pedido com o status [" + this.status.toString() + "] não pode ir para o status [" + novoStatus.toString() + "]. Status aceitos: [" + this.status.nextToString() + "]");
        
        this.status = novoStatus;
    }

    getTotal(): number{
        let total = 0;

        for(const item of this.items){
            total += item.getTotal();
        }

        if(this.cupom) total -= (total*this.cupom.percentual_desconto)/100;

        return total;
    }

    equals(entity: IEntity): boolean {
        if (!(entity instanceof Pedido)) return false;
        return this.codigo === entity.codigo;
    }
}