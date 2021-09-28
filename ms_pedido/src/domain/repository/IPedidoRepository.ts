import Pedido from "../entity/Pedido";
import IRepository from "./IRepository";

export default interface IPedidoRepository extends IRepository<Pedido, string>{
    
}