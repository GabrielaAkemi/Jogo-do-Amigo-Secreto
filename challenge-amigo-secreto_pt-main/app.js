//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome == ''){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos) 
    }
    limparCampo();
}

function atualizarAmigos(){

}

function sortearAmigos(){

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}