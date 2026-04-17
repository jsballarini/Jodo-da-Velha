# Guia de Contribuicao

## Objetivo

Este documento define um fluxo simples para manter o projeto organizado,
coeso e facil de evoluir.

## Padroes Gerais

- Mantenha o codigo simples, modular e sem duplicacao desnecessaria.
- Prefira nomes claros para variaveis, funcoes e classes CSS.
- Evite numeros magicos quando um valor puder ser extraido para constante.
- Adicione comentarios apenas quando eles realmente agregarem contexto.

## HTML

- Preserve a semantica da pagina.
- Mantenha atributos de acessibilidade como `aria-label` quando aplicavel.
- Evite inserir logica diretamente no HTML.

## CSS

- Reutilize variaveis definidas em `:root`.
- Preserve consistencia de espacos, tamanhos e naming.
- Prefira estilos componentizados por bloco visual.

## JavaScript

- Separe responsabilidades em funcoes pequenas e objetivas.
- Valide estados antes de aplicar efeitos no DOM.
- Evite acoplamento desnecessario entre regra de negocio e interface.

## Versionamento

- Use versionamento semantico seguindo `semver.org`.
- Registre mudancas relevantes em `CHANGELOG.md`.

## Commits

- Prefira Conventional Commits.
- Exemplos:
  - `feat: adiciona modo contra IA`
  - `fix: corrige deteccao de empate`
  - `docs: atualiza instrucoes de execucao`

## Validacao

Antes de finalizar uma alteracao:

- teste o fluxo principal no navegador
- valide se o placar e o reinicio continuam funcionando
- confira se a interface permanece responsiva
