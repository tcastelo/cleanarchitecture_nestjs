export default class CupomInvalidoError extends Error{
    
    constructor(error_message: string){
        super(error_message);
    }
}