//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listAmigos = []



function adicionarAmigo(){
    let amigo = document.querySelector("input").value;
    if(amigo && amigo.trim()!==""){
        listAmigos.push(amigo)
        let lista = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
        document.querySelector("input").value = "";

    }else{
        alert("Não pode adicionar campos vazios")
    }
    

    console.log(listAmigos);

}




function sortearAmigo(){
    if (listAmigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    let random = Math.floor(Math.random() * listAmigos.length);
    let sorteado = listAmigos[random];

    console.log(sorteado);

    let lista = document.getElementById("resultado");

    lista.innerHTML = "";

    
    let tagP = document.createElement("p");
    tagP.textContent = `O sorteado foi: ${sorteado}`;
    lista.appendChild(tagP);

    document.getElementById("listaAmigos").innerHTML = "";
}




