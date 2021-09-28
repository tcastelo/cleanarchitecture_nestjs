export default class QuantidadeInvalidaError extends Error{
    
    constructor(error_message: string){
        super(error_message);
    }
}