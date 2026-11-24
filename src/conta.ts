import { Conta } from "./class/Conta.js";

const contaSalva = localStorage.getItem("Conta");

let conta: Conta;

if (contaSalva) {
    const dados = JSON.parse(contaSalva, reviverDatas);

    // JSON.parse devolve um objeto comum, então recriamos a instância da classe
    conta = Object.assign(new Conta(), dados);
} else {
    conta = new Conta();
}

export const contaPrincipal = conta;

localStorage.setItem("Conta", JSON.stringify(contaPrincipal));

function reviverDatas(chave: string, valor: unknown): unknown {
    if ((chave === "dataAcesso" || chave === "data") && typeof valor === "string") {
        return new Date(valor);
    }

    return valor;
}