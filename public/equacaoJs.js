class Equacao {
    static mostrar_equacao (a, b, c) {
        let coef_a = (a === 0) ? `` : (a === 1) ? `+x\u00B2` : (a === -1) ? `-x\u00B2` : (a <= -1) ? `${a}x\u00B2` : `+${a}x\u00B2`;
        let coef_b = (b === 0) ? `` : (b === 1) ? `+x` : (b === -1) ? `-x` : (b <= -1) ? `${b}x` : `+${b}x`;
        let coef_c = (c === 0) ? `` : (c > 0) ? `+ ${c}` : `${c}`;
        return `${coef_a} ${coef_b} ${coef_c}`
    }
    static delta (a, b, c) {
        if (a === 0) {
            return `Sem delta. Equação do primeiro grau.`;
        } else {
            return b**2 - (4 * a * c)
        }
    }
    static raizes (a, b, c) {
        if (Equacao.delta(a, b, c) < 0) {
            return `Sem raízes nos números reais. Delta negativo.`
        } else if (a === 0) {
            return (0 - c) / b;
        } else {
            let raizes = new Set()
            let raiz_1 = (-b + (Equacao.delta(a, b, c))**(1/2)) / (2*a)
            let raiz_2 = (-b - (Equacao.delta(a, b, c))**(1/2)) / (2*a)
            raizes.add(raiz_1);
            raizes.add(raiz_2);
            let texto = ""
            for (const iterator of raizes) {
                if (texto.length === 0) {
                    texto += iterator;
                } else {
                    texto += `, ${iterator}`
                }
            }
            return texto;
        }
    }
    static descricao (a, b, c) {
        console.log(`Equacao: ${Equacao.mostrar_equacao(a, b, c)}`);
        console.log(`Delta: ${Equacao.delta(a, b, c)}`);
        console.log(`Raizes: ${Equacao.raizes(a, b, c)}`);
    }
}

const coeficientes = document.querySelectorAll("#display-equacao input");
const coef_a = document.getElementById("coef_a");
const coef_b = document.getElementById("coef_b");
const coef_c = document.getElementById("coef_c");

const delta = document.getElementById("delta");
const raizes = document.getElementById("raizes");

coeficientes.forEach((item) => {
    item.addEventListener("input", (e) => {
        e.preventDefault();

        let a = parseFloat(coef_a.value);
        let b = parseFloat(coef_b.value);
        let c = parseFloat(coef_c.value);

        delta.textContent = Equacao.delta(a, b, c);
        raizes.textContent = Equacao.raizes(a, b, c);
    })
})

let a = parseFloat(coef_a.value);
let b = parseFloat(coef_b.value);
let c = parseFloat(coef_c.value);

delta.textContent = Equacao.delta(coef_a.value, coef_b.value, coef_c.value);
raizes.textContent = Equacao.raizes(coef_a.value, coef_b.value, coef_c.value);
