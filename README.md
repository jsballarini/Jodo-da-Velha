# Jogo da Velha (HTML + CSS + JS)

Jogo da velha interativo feito com HTML, CSS e JavaScript puro.

## Como Rodar

### Opção 1: abrir direto no navegador

1. Abra o arquivo `index.html` no seu navegador.

### Opção 2: servidor local (recomendado)

Alguns navegadores podem aplicar restricoes diferentes ao abrir arquivo localmente. Um servidor local evita isso.

PowerShell (Windows):

```powershell
cd "c:\Dev\Projetos\Jodo da Velha"
python -m http.server 5173
```

Depois acesse:

- http://localhost:5173/

## Funcionalidades

- Tabuleiro 3x3 clicavel
- Alternancia de turno (X e O)
- Deteccao de vitoria e empate
- Destaque visual da combinacao vencedora
- Botao de reinicio de rodada
- Placar por sessao (enquanto a pagina estiver aberta)

## Estrutura

- `index.html`: layout, tabuleiro, status e placar
- `styles.css`: tema e layout responsivo
- `script.js`: regras do jogo (jogadas, vitoria/empate, reinicio)

## Proximas Melhorias (ideias)

- Modo "Jogador vs IA" (facil/medio/dificil)
- Persistir placar com `localStorage`
- Atalhos de teclado e melhor acessibilidade (ex.: navegação por setas)

## Licenca

Se quiser, posso adicionar uma licenca (MIT, Apache-2.0, etc.).
