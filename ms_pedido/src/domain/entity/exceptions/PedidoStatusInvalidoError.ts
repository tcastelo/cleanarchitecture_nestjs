export default class PedidoStatusInvalidoError extends Error{
    
    constructor(error_message: string){
        super(error_message);
    }
}