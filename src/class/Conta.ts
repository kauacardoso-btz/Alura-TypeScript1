import type { GrupoTransacao } from "../types/GrupoTransacao.js"
import { TipoTransacao } from "../types/TipoTransacao.js"
import { Transacao } from "../types/Transacao.js"

export class Conta {
    private saldo: number
    private dataAcesso: Date
    private transacoes: Transacao[]

    constructor() {
        this.saldo = 0
        this.dataAcesso = new Date(Date.now())
        this.transacoes = []
    }

    public depositar(deposito: number) {
        if (deposito <= 0) {
            throw new Error('O valor a ser depositado deve ser maior que zero!')
        }

        this.saldo += deposito
    }

    public debitar(debito: number) {
        if (debito <= 0) {
            throw new Error('O valor a ser debitado deve ser maior que zero!')
        }
        if (debito > this.saldo) {
            throw new Error('Saldo insuficiente!')
        }

        this.saldo -= debito
    }

    public obterSaldo(): number {
        return this.saldo
    }

    public getDataAcesso(): Date {
        return this.dataAcesso
    }

    public getTransacoes(): Transacao[] {
        return this.transacoes
    }

    public getGrupoTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = []
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes)
        const transacaoOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime())

        let labelAtualGrupoTransacao: string = ''

        for (let transacao of transacaoOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString('pt-br', { month: 'long', year: 'numeric' })
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                })
            }

            gruposTransacoes.at(-1)?.transacoes.push(transacao)
        }

        return gruposTransacoes
    }

    public registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA
            || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor)
        } else {
            throw new Error("Tipo de Transação é inválido!");
        }

        this.transacoes.push(novaTransacao)
        this.salvar()
        console.log(this.getGrupoTransacoes());
    }

    private salvar(): void {
        localStorage.setItem("Conta", JSON.stringify(this));
    }
}