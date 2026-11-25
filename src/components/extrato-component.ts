import { contaPrincipal } from "../conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js"
import { TipoTransacao } from "../types/TipoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes") as HTMLElement;

function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = contaPrincipal.getGrupoTransacoes()
    elementoRegistroTransacoesExtrato.innerHTML = ''
    let htmlRegistroTransacoes: string = ''

    for (let grupoTransacao of gruposTransacoes) {

        let htmlTransacaoItem: string = ''
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">
                        ${transacao.tipoTransacao == TipoTransacao.DEPOSITO  
                            ? formatarMoeda(transacao.valor)
                            : `- ${formatarMoeda(transacao.valor)}`
                        }
                        </strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
        `
        }

        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `
    }

    if (htmlRegistroTransacoes === ``) {
        htmlRegistroTransacoes = `<div>Não há transações indentificadas</div>`
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes
}

export const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrato()
    }
}

ExtratoComponent.atualizar()