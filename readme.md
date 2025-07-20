## Pirâmide CLI

Gere e visualize pirâmides de texto no terminal, com opções de altura, quantidade, caractere e orientação (normal ou invertida).

### Como rodar

1. Instale o Node.js (versão 18+ recomendada).
2. Dezipe o arquivo ou baixe pelo repositório.
3. No terminal, navegue até a pasta do projeto.
4. Execute:

```sh
node cli.js
```

### Classes utilitárias 

**Entidades e utilitários:**

- Piramides: classe principal responsável por construir e desenhar as pirâmides no terminal.
- perguntar-ate-valido: função que repete a pergunta até receber uma resposta válida (Ctrl+C para sair).
- readline: encapsula o readline do Node.js para facilitar a entrada de dados no CLI.
- switch-case: interpreta a resposta do usuário para pirâmide invertida, normalizando e convertendo para booleano.
- valida-char: garante que a resposta seja um único caractere (já que JS não tem tipo char).
- valida-numero: valida se a entrada do usuário é um número inteiro positivo.
- cli: arquivo principal que executa o programa e orquestra as perguntas e o desenho das pirâmides.

### Como funciona

- O programa irá perguntar a altura e a quantidade de pirâmides.
- Para cada pirâmide, escolha o caractere e se ela será invertida.
- Se quiser uma pirâmide invisível (apenas espaço reservado), use espaço como caractere.
- O resultado será exibido no terminal, com as pirâmides lado a lado.

### Observações

- O projeto usa módulos ES, por isso sempre use a extensão `.js` nos imports.
- O código está em português e segue boas práticas de clean code.
- Para sair do programa, use `Ctrl+C`.

