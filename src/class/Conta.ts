import { TipoTransacao } from "../types/TipoTransacao.js"
import { Transacao } from "../types/Transacao.js"

export class Conta {
    private saldo: number
    private dataAcesso: Date
    private historicoTransacoes: Transacao[]

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
        this.dataAcesso = new Date()
        this.historicoTransacoes = []
    }

    public depositar(deposito: number) {
        this.saldo += deposito
    }

    public debitar(debito: number) {
        this.saldo -= debito
    }

    public obterSaldo(): number {
        return this.saldo
    }

    public getDataAcesso(): Date {
        return this.dataAcesso
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

        this.historicoTransacoes.push(novaTransacao)
    }
}