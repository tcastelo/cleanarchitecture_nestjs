import IEntity from "./IEntity";

export default class Cupom implements IEntity{
    
    codigo: string;
    descricao: string;
    percentual_desconto: number;
    data_validade: Date;

    constructor(codigo: string, descricao: string, percentual_desconto: number, data_validade: Date){
        this.codigo = codigo;
        this.descricao = descricao;
        this.percentual_desconto = percentual_desconto;
        this.data_validade = data_validade;
    }

    isCupomValido(): boolean{
        const today = new Date().getTime();
        return this.data_validade.getTime() < today;
    }

    equals(entity: IEntity): boolean {
        if (!(entity instanceof Cupom)) return false;
        return this.codigo === entity.codigo;
    }
}