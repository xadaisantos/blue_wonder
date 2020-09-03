let tabuleiro = document.getElementById("tabuleiro");
let espacos = tabuleiro.querySelectorAll("td");
let jogador = document.getElementById("jogador");
let mensagem_1 = document.getElementById("mensagem-1");
let mensagem_2 = document.getElementById("mensagem-2");
let recomecar = document.getElementById("recomecar");

function checarVitoria(array){

    let victory_X = array.every(item => item === "X");
    let victory_O = array.every(item => item === "O");

    if (victory_X) {
        return "X";
    } else if (victory_O) {
        return "O";
    }
}

function checarTabuleiroCheio(){
    let espacosTexto = [];

    for (let i = 0; i < espacos.length; i++) {
        espacosTexto.push(espacos[i].textContent)
    }

    if (espacosTexto.every(item => item != "")) {
        return true;
    }
}

let continuar = true;

espacos.forEach(quadrado => {
    quadrado.addEventListener("click", () => {
        if (continuar === true && jogador.textContent === "X" && quadrado.textContent === "") {
            quadrado.textContent = "X";
            jogador.textContent = "O";
        } else if (continuar === true && jogador.textContent === "O" && quadrado.textContent === "") {
            quadrado.textContent = "O";
            jogador.textContent = "X";
        }

        let vitorias = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i < vitorias.length; i++) {
            vitorias[i][0] = espacos[vitorias[i][0]].textContent;
            vitorias[i][1] = espacos[vitorias[i][1]].textContent;
            vitorias[i][2] = espacos[vitorias[i][2]].textContent;
        };
        
        for (let i = 0; i < vitorias.length; i++) {

            let quem_ganhou = checarVitoria(vitorias[i]);

            if (quem_ganhou) {
                continuar = false;
                mensagem_1.style.display = "none";
                mensagem_2.innerHTML = `----- O jogador <strong>"${quem_ganhou}"</strong> venceu! -----`
                mensagem_2.style.display = "block";
                break;
            } else if (!quem_ganhou && checarTabuleiroCheio()) {
                continuar = false;
                mensagem_1.style.display = "none";
                mensagem_2.innerHTML = `----- EMPATE! -----`
                mensagem_2.style.display = "block";
                break;
            };
            
            // else if (checarTabuleiroCheio()) {
            //     continuar = false;
            //     mensagem_1.style.display = "none";
            //     mensagem_2.innerHTML = `----- EMPATE! -----`
            //     mensagem_2.style.display = "block";
            // }
        };
    })
})

recomecar.addEventListener("click", () => {
    continuar = true;
    mensagem_1.style.display = "block";
    mensagem_2.innerHTML = "";
    mensagem_2.style.display = "none";

    for (let i = 0; i < espacos.length; i++) {
        espacos[i].textContent = "";
    }
})