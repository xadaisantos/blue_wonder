let mes_para_ano_input = document.getElementById("mpaInput");
let mes_para_ano_output = document.getElementById("mpaOutput");

let ano_para_mes_input = document.getElementById("apmInput");
let ano_para_mes_output = document.getElementById("apmOutput");

function taxa_anual_para_mensal(taxa_anual){
    let taxa_mensal = ((1 + (taxa_anual/100))**(1/12) - 1) * 100;
    taxa_mensal = Number.parseFloat(taxa_mensal).toFixed(2);
    return taxa_mensal;
}

function taxa_mensal_para_anual(taxa_mensal){
    let taxa_anual = ((1 + (taxa_mensal/100))**(12) - 1) * 100;
    taxa_anual = Number.parseFloat(taxa_anual).toFixed(2);
    return taxa_anual;
}

mes_para_ano_input.addEventListener("input", (e) => {
    mes_para_ano_output.textContent = taxa_mensal_para_anual(e.target.value);
})

ano_para_mes_input.addEventListener("input", (e) => {
    ano_para_mes_output.textContent = taxa_anual_para_mensal(e.target.value);
})

