# Jogo da Velha

Jogo da velha interativo desenvolvido com HTML, CSS e JavaScript puro.

## Visao Geral

Este projeto entrega uma interface simples e responsiva para duas pessoas jogarem
no mesmo dispositivo, com controle de turno, placar da sessao e deteccao
automatica de vitoria ou empate.

## Versao Atual

- `1.0.0`

Historico de alteracoes:

- `CHANGELOG.md`

## Como Rodar

### Opcao 1: abrir direto no navegador

1. Abra o arquivo `index.html` no navegador.

### Opcao 2: servidor local (recomendado)

Um servidor local oferece um ambiente mais consistente para testes.

```powershell
cd "c:\Dev\Projetos\Jodo da Velha"
python -m http.server 5173
```

Depois, abra:

- [http://localhost:5173/](http://localhost:5173/)

## Funcionalidades

- Tabuleiro 3x3 interativo
- Alternancia automatica entre `X` e `O`
- Deteccao de combinacoes vencedoras
- Deteccao de empate
- Destaque visual das casas vencedoras
- Reinicio de rodada sem perder o placar da sessao

## Estrutura do Projeto

- `index.html`: estrutura da pagina, placar e tabuleiro
- `styles.css`: layout, responsividade e tema visual
- `script.js`: estado do jogo, turnos e regras
- `README.md`: guia de uso e manutencao
- `CHANGELOG.md`: historico de versoes

## Regras do Jogo

- O jogador `X` inicia a rodada.
- Cada jogada ocupa uma unica casa do tabuleiro.
- Vence quem alinhar tres simbolos na horizontal, vertical ou diagonal.
- Se todas as casas forem preenchidas sem vencedor, a rodada termina em empate.

## Melhorias Sugeridas

- Modo `Jogador vs IA`
- Persistencia do placar com `localStorage`
- Indicador visual do jogador ativo
- Melhorias de acessibilidade com teclado
- Separacao da logica em modulos JavaScript

## Contribuicao

Boas praticas e padroes de alteracao estao descritos em:

- `CONTRIBUTING.md`

## Licenca

Nenhuma licenca foi definida ate o momento. Se quiser, posso adicionar uma
licenca como `MIT` ou `Apache-2.0`.
