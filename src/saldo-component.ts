import { Conta } from "./conta.js";

export let conta: Conta = new Conta(3000)

export const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = conta.obterSaldoFormatado()
}
