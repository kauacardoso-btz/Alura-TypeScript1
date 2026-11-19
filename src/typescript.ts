let valor: number = 3000
let nome: string = ''
let isPago: boolean = false
let qualquer: any = ''
qualquer = 20

// Arrays
const lista = []
lista.push('Jhonathan', 22, true, {})

const lista2: number[] = []

// Tipos personalizados (Type Alias)
type Transação = {
    tipoTransacao: TipoTransacao,
    data: Date,
    valor: number
}

// Enum
enum TipoTransacao {
    DEPOSITO = 'Depósito',
    TRANSFERENCIA = 'Transferência',
    PAGAMENTO_BOLETO = 'Pagamento de Boleto'
}

const novaTransacao: Transação = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}