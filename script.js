let botaoAtivo = null;

function exibirImagem(opcao, botao) {
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    if(opcao === 'sol') {
        imagem.src = "sol.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia.";
        document.querySelector("body").style.background = "#661414";
    } else if(opcao === 'lua') {
        imagem.src = "lua.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
        document.querySelector("body").style.background = "#658106";
    } else if(opcao === 'estrela') {
        imagem.src = "estrela.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Estrela! Um dos pontos brilhantes no céu noturno";
        document.querySelector("body").style.background = "#707070";
    } else if(opcao === 'cometa') {
        imagem.src = "cometa.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o cometa!";
        document.querySelector("body").style.background = "#203185";
    } else if(opcao === 'marte') {
        imagem.src = "marte.png";
        imagem.style.display = "block"
        texto.innerText = "Você escolheu Marte! O planeta vermelho";
        document.querySelector("body").style.background = "#605023";
    } else {
        imagem.style.display = "none";
        texto.innerText = "Opção inválida. Escolha entre Sol, Lua ou Estrela.";
    }

    if(botaoAtivo) {
        botaoAtivo.classList.remove('active');
    }

    botao.classList.add('active');
    botaoAtivo = botao;
}
