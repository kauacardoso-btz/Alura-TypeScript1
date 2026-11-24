import { Conta } from "./conta.js";
import { FormatoData } from "./formatoData.js";
import { formatarData, formatarMoeda } from "./formatters.js";

export let conta: Conta = new Conta(3000)

const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement
if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date()
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

export const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(conta.obterSaldo())
}

