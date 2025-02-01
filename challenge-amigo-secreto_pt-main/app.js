
let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome == ''){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    limparCampo();
    atualizarAmigos();  

}

function atualizarAmigos(){
    let exibirNome = document.getElementById('listaAmigos');
    exibirNome.innerHTML = "";
    for(var i = 0; i < amigos.length; i++){
        exibirNome.innerHTML +=  '<li>' + amigos[i] + '</li>';
    }
}

function sortearAmigo(){
    let sorteio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  '<li> O seu amigo sorteado é:' + amigos[sorteio] + '</li>';
    let exibirNome = document.getElementById('listaAmigos');
    exibirNome.innerHTML = "";
    amigos = [];
}

function limparCampo() {
    limparNome = document.querySelector('input');
    limparNome.value = '';
}