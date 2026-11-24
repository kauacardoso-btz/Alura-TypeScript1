import { TipoTransacao } from "./tipo-transacao"

export type Transacao = {
   tipoTransacao: TipoTransacao,
   valor: number,
   data: Date 
}