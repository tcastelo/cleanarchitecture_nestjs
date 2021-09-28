export default class PedidoStatus{
    static readonly AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO = new PedidoStatus(1, "AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO", [2, 5]);
    static readonly PEDIDO_CONFIRMADO = new PedidoStatus(2, "PEDIDO_CONFIRMADO", [3, 4, 7]);
    static readonly PEDIDO_ENVIADO = new PedidoStatus(3, "PEDIDO_ENVIADO", [6]);
    static readonly PEDIDO_CANCELADO_ESTABELECIMENTO = new PedidoStatus(4, "PEDIDO_CANCELADO_ESTABELECIMENTO", []);
    static readonly PEDIDO_CANCELADO_CLIENTE = new PedidoStatus(5, "PEDIDO_CANCELADO_CLIENTE", []);
    static readonly PEDIDO_DEVOLVIDO_CLIENTE = new PedidoStatus(6, "PEDIDO_DEVOLVIDO_CLIENTE", []);
    static readonly PEDIDO_AGUARDANDO_RESPOSTA_CLIENTE = new PedidoStatus(7, "PEDIDO_AGUARDANDO_RESPOSTA_CLIENTE", [2, 4, 5]);

    private id: number;
    private label: string;
    private next: number[];
    
    private constructor(id: number, label: string, next: number[]){
        this.id = id;
        this.label = label;
        this.next = next;
    }

    static fromString(label: string): PedidoStatus{
        switch (label){
            case "AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO": return PedidoStatus.AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO;
            case "PEDIDO_CONFIRMADO": return PedidoStatus.PEDIDO_CONFIRMADO;
            case "PEDIDO_ENVIADO": return PedidoStatus.PEDIDO_ENVIADO;
            case "PEDIDO_CANCELADO_ESTABELECIMENTO": return PedidoStatus.PEDIDO_CANCELADO_ESTABELECIMENTO;
            case "PEDIDO_CANCELADO_CLIENTE": return PedidoStatus.PEDIDO_CANCELADO_CLIENTE;
            case "PEDIDO_DEVOLVIDO_CLIENTE": return PedidoStatus.PEDIDO_DEVOLVIDO_CLIENTE;
            case "PEDIDO_AGUARDANDO_RESPOSTA_CLIENTE": return PedidoStatus.PEDIDO_AGUARDANDO_RESPOSTA_CLIENTE;
            default: return null;
        }
    }

    static fromId(id: number): PedidoStatus{
        switch (id){
            case 1: return PedidoStatus.AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO;
            case 2: return PedidoStatus.PEDIDO_CONFIRMADO;
            case 3: return PedidoStatus.PEDIDO_ENVIADO;
            case 4: return PedidoStatus.PEDIDO_CANCELADO_ESTABELECIMENTO;
            case 5: return PedidoStatus.PEDIDO_CANCELADO_CLIENTE;
            case 6: return PedidoStatus.PEDIDO_DEVOLVIDO_CLIENTE;
            case 7: return PedidoStatus.PEDIDO_AGUARDANDO_RESPOSTA_CLIENTE;
            default: return null;
        }
    }

    validaStatus(novoStatus: PedidoStatus): boolean {
        return this.next.filter((x) => x == novoStatus.id).length > 0;
    }

    toString(): string{
        return this.label;
    }

    nextToString(): string{
        return this.next.map(x => PedidoStatus.fromId(x).toString()).toString();
    }

}