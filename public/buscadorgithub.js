let buscadorInput = document.getElementById("buscadorgithub"); // http://127.0.0.1:3000/buscadorgithub
let buscadorBotao = document.getElementById("buscar-github");

let divInformacao = document.getElementById("informacao");
let divNaoEncontrou = document.getElementById("nao-encontrou");

let nome = document.getElementById("nome");
let organizacao = document.getElementById("organizacao");
let localizacao = document.getElementById("localizacao");
let numeroSeguidores = document.getElementById("numeroSeguidores");
let repos = document.getElementById("repos");

var client_id = "Iv1.a22a6f7134d1463e";
var client_secret = "d2701d160a8910f8251efc451b74718bc3578ff0";

// http://api-pacientes.herokuapp.com/pacientes
// https://api.github.com/users/
// https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}

let informaErro = () => {
    divInformacao.style.display = "none";
    divNaoEncontrou.style.display = "block";
}

let buscaECriaUsuario = () => {

    // Tentei separar o buscar e o criar
    // Nao consegui

    let valorInput = buscadorInput.value;

    fetch(`https://api.github.com/users/${valorInput}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response => response.json())
        .then(usuario => {
            fetch(`https://api.github.com/users/${valorInput}/repos?client_id=${client_id}&client_secret=${client_secret}`)
                .then(response => response.json())
                .then(listaDeRepositorios => {

                    divInformacao.style.display = "block";
                    divNaoEncontrou.style.display = "none";

                    nome.textContent = usuario.name || "Não fornecido";
                    organizacao.textContent = usuario.company || "Não fornecido";
                    localizacao.textContent = usuario.location || "Não fornecido";
                    numeroSeguidores.textContent = usuario.followers;
                    repos.innerHTML = usuario.public_repos;

                    listaDeRepositorios.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)

                    repos.innerHTML += "<br><br>";

                    listaDeRepositorios.forEach(repositorio => {
                        repos.innerHTML += `<div><a href="${repositorio.html_url}" target="_blank">${repositorio.name}</a>, ${repositorio.stargazers_count} stars.</div>`
                    })

                }).catch(err => {
                    informaErro()
                })
        })
}

buscadorBotao.addEventListener("click", () => {
    buscaECriaUsuario();
});
