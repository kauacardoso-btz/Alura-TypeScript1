# Alura TypeScript 1

Repositório de estudos e projeto prático do curso **TypeScript: implemente um projeto completo com TypeScript e módulos**, da Alura.

## Propósito

Este repositório registra a construção de uma aplicação de controle de conta bancária, usando TypeScript para praticar tipagem, módulos, enums, classes, funções reutilizáveis e tratamento de erros.

O projeto permite registrar depósitos, transferências e pagamentos de boleto, atualizar o saldo e organizar as transações por mês.

## Aprendizados

- diferenças entre JavaScript e TypeScript;
- configuração do compilador com `tsconfig.json`;
- uso de tipos primitivos, arrays tipados e aliases de tipo;
- criação e utilização de enums;
- organização do código em módulos com `import` e `export`;
- criação de classes com atributos privados, métodos e construtores;
- validação de regras de negócio e lançamento de erros com `throw new Error`;
- tratamento de erros com `try` e `catch`;
- manipulação e agrupamento de transações por data;
- formatação de valores monetários e datas com `Intl`;
- persistência dos dados no `localStorage`;
- compilação do TypeScript para JavaScript.

## Organização dos exemplos

| Arquivo | Conceito principal |
| --- | --- |
| `tsconfig.json` | configuração do compilador, diretórios de origem e saída e versão do JavaScript gerado |
| `src/class/Conta.ts` | classe da conta, saldo, transações, regras de negócio e agrupamento por mês |
| `src/conta.ts` | recuperação da conta do `localStorage` e reconstrução das datas e da instância da classe |
| `src/types/Transacao.ts` | alias de tipo que define os dados de uma transação |
| `src/types/TipoTransacao.ts` | enum com os tipos de transação disponíveis |
| `src/types/GrupoTransacao.ts` | alias de tipo para grupos de transações |
| `src/types/FormatoData.ts` | enum com os formatos de data utilizados pela aplicação |
| `src/components/nova-transacao-component.ts` | leitura e validação do formulário e registro de novas transações |
| `src/components/saldo-component.ts` | atualização do saldo e da data de acesso na interface |
| `src/components/extrato-component.ts` | renderização do extrato e dos grupos de transações |
| `src/utils/formatters.ts` | formatação de valores monetários e datas |
| `src/main.ts` | ponto de entrada que carrega os componentes da aplicação |
| `Requisitos.txt` | regras de negócio esperadas para as transações e o saldo |

## Como executar

Na raiz do repositório, instale as dependências:

```bash
npm install
```

Compile os arquivos TypeScript para JavaScript:

```bash
npx tsc
```

Os arquivos compilados serão gerados em `dist/js/`, conforme definido no `tsconfig.json`.

> O repositório contém os módulos TypeScript da aplicação, mas não inclui uma página HTML no estado atual. Os componentes esperam uma interface com os elementos de formulário, saldo e extrato correspondentes aos seletores usados no código.
