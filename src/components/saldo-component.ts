import { contaPrincipal } from "../conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement

if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(contaPrincipal.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

atualizarSaldo()
export function atualizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(contaPrincipal.obterSaldo())
    }
}