let res = document.getElementById('res')
let btn = document.getElementById('btn')
let radioBts = document.querySelectorAll('input[name="pontuacao"]')

btn.addEventListener("click", () => {
    let option;
    for (const radioOpt of radioBts) {
        if (radioOpt.checked) {
            option = radioOpt.value;
            break;
        }
    }
    CriaCPF(option);
});


function CriaCPF(option) {
    let novoCPF = [];
    for (let i = 0; i < 9; i++) {
        novoCPF += (Math.floor(Math.random() * 10).toString());
    }

    const digito1 = criaDigito(novoCPF);
    const digito2 = criaDigito(novoCPF + digito1)
    const cpfCompleto = novoCPF + digito1 + digito2;

    let cpfFinal = '';
    if (option === 'sim') {
        let cpfEmarr = Array.from(cpfCompleto);
        cpfEmarr.splice(3, 0, ".")
        cpfEmarr.splice(7, 0, ".")
        cpfEmarr.splice(11, 0, "-")

        for (let i = 0; i < cpfEmarr.length; i++) {
            cpfFinal += cpfEmarr[i].toString();
        }
    }
    else {
        cpfFinal = cpfCompleto;
    }

    res.innerHTML = `CPF Gerado: ${cpfFinal}`
}

function criaDigito(novoCPF) {
    let cont = novoCPF.length + 1;
    let total = 0;

    for (let stringNumerica of novoCPF) {
        total += cont * Number(stringNumerica);
        cont--;
    }

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}
