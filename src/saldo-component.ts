import { Conta } from "./conta.js";
import { formatarData, formatarMoeda } from "./formatters.js";

export let conta: Conta = new Conta(3000)

const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement
if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date()
    elementoDataAcesso.textContent = formatarData(dataAcesso)
}

export const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(conta.obterSaldo())
}

