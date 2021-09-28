import { Inject } from "@nestjs/common";
import IPedidoRepository from "../repository/IPedidoRepository";

export default class CriarPedido{
    
    @Inject()
    pedidoRepository: IPedidoRepository;

    constructor(){}

    executar(){
        
    }
}