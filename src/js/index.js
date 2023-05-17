const botaoAlterarTema = document.getElementById("bnt-alterar-tema");

const body = document.querySelector("body");

const imagemBntTroca = document.querySelector(".img-bnt");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBntTroca.setAttribute("src", "./src/imagens/pokemons/sun.png");
    } 
    else {
        imagemBntTroca.setAttribute("src", "./src/imagens/pokemons/moon.png");
    }

});