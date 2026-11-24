import { TipoTransacao } from "./tipoTransacao"

export type Transacao = {
   tipoTransacao: TipoTransacao,
   valor: number,
   data: Date 
}