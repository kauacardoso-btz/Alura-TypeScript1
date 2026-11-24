export class Conta {
    private saldo: number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
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

    public obterSaldoFormatado(): string {
        return this.saldo.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })
    }
}