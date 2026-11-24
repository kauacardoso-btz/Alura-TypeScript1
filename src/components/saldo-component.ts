import { Conta } from "../class/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

export let conta: Conta = new Conta(3000)
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement

if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date()
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

atualizarSaldo()

export function realizarTransacao(tipoTransacao: TipoTransacao, valor: number): void {
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        conta.depositar(valor);
    } else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        conta.debitar(valor)
    } else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    atualizarSaldo()
}

function atualizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(conta.obterSaldo())
    }
}