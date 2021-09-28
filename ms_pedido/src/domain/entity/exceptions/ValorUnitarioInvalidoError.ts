export default class ValorUnitarioInvalidoError extends Error{
    
    constructor(error_message: string){
        super(error_message);
    }
}