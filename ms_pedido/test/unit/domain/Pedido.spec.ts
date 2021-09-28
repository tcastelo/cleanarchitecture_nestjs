import PedidoStatusInvalidoError from "../../../src/domain/entity/exceptions/PedidoStatusInvalidoError";
import Pedido from "../../../src/domain/entity/Pedido";
import Endereco from "../../../src/domain/entity/value_objects/Endereco";
import PedidoStatus from "../../../src/domain/entity/value_objects/PedidoStatus";

describe('Pedido testes', () => {

    let pedido_mock: Pedido;

    beforeEach(() => {
        pedido_mock = new Pedido(new Date(), 1, new Endereco("740000", "Rua Teste","","Bairro Teste", "Goiania","GO"), PedidoStatus.AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO);
    });

    it("Deve criar um novo Pedido", () => {
        const pedido = new Pedido(new Date(), 1, new Endereco("740000", "Rua Teste","","Bairro Teste", "Goiania","GO"), PedidoStatus.AGUARDANDO_CONFIRMACAO_ESTABELECIMENTO);
        expect(pedido instanceof Pedido).toBeTruthy();
        expect(pedido).toEqual(pedido_mock);
    });

    it("Deve atualizar o status do pedido para um status inválido", () => {
        expect(() =>
            pedido_mock.atualizarStatus(PedidoStatus.PEDIDO_AGUARDANDO_RESPOSTA_CLIENTE)
        ).toThrowError(PedidoStatusInvalidoError)
    })

    it("Deve atualizar o status do pedido para um status válido", () => {
        expect(() =>
            pedido_mock.atualizarStatus(PedidoStatus.PEDIDO_CONFIRMADO)
        ).not.toThrowError(PedidoStatusInvalidoError)
    })

})