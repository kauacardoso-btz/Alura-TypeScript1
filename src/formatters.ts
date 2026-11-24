export function formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })
}

export function formatarData(data: Date) {
    return data.toLocaleDateString('pt-br', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}