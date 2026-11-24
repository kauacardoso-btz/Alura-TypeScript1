export class Conta {
    private saldo: number = 3000

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
}