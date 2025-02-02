# Sorteio de Amigos

Este é um projeto simples em JavaScript que permite adicionar amigos a uma lista, exibir essa lista na tela, e realizar um sorteio aleatório entre os amigos para escolher um deles.

https://gabrielaakemi.github.io/Jogo-do-Amigo-Secreto/

## Funcionalidades

### 1. **Adicionar Amigo**
- O usuário pode adicionar um nome à lista de amigos através de um campo de entrada de texto. Caso o campo esteja vazio, o sistema avisa o usuário para inserir um nome.
  
### 2. **Exibir Lista de Amigos**
- Após adicionar um amigo, a lista de amigos é exibida na tela, atualizada em tempo real com os novos amigos adicionados.

### 3. **Sortear Amigo**
- O sistema permite realizar um sorteio entre os amigos cadastrados e exibe o nome do amigo sorteado na tela.

### 4. **Limpar Campo**
- Após adicionar um amigo à lista, o campo de entrada de texto é limpo automaticamente para permitir a inserção de um novo nome facilmente.

## Estrutura do Código

O código é estruturado em várias funções principais:

### `adicionarAmigo()`
Adiciona o nome inserido pelo usuário à lista `amigos`, verifica se o campo não está vazio e atualiza a exibição dos amigos na tela. Após adicionar, o campo de texto é limpo.

### `atualizarAmigos()`
Exibe a lista atualizada de amigos na tela, gerando um item `<li>` para cada amigo.

### `sortearAmigo()`
Realiza o sorteio aleatório de um amigo da lista e exibe o resultado na tela. Após o sorteio, a lista de amigos é limpa.

### `limparCampo()`
Limpa o campo de entrada de texto onde o nome do amigo é inserido.

## Como Usar

1. Insira um nome no campo de texto.
2. Clique no botão para adicionar o amigo à lista.
3. O nome será adicionado à lista de amigos e exibido na tela.
4. Para realizar um sorteio, clique no botão de sorteio e um amigo será escolhido aleatoriamente.

## Dependências
Este projeto não possui dependências externas. Ele usa apenas recursos nativos do JavaScript e HTML.
