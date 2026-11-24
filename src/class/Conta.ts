import { TipoTransacao } from "../types/TipoTransacao.js"
import { Transacao } from "../types/Transacao.js"

export class Conta {
    private saldo: number 
    private dataAcesso: Date
    private historicoTransacoes: Transacao[]

    constructor() {
        this.saldo = 0
        this.dataAcesso = new Date(Date.now())
        this.historicoTransacoes = []
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
        this.salvar()
    }

    private salvar(): void {
        localStorage.setItem("Conta", JSON.stringify(this));
    }
}