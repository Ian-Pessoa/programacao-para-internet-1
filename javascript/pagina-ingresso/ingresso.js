let carrinhoDeCompras = JSON.parse(sessionStorage.getItem("carrinho")) || [];

window.addEventListener("load", main)

const filmes = [
    {
        id: 0,
        img: "https://4.bp.blogspot.com/-GW1Ex5rl1o8/VMG9B8zuM2I/AAAAAAAAQ-A/PdXFAKUlN2c/s1600/somaoredor1.jpeg",
        titulo: "O Som ao redor",
        descricao:
            "O Som ao Redor começa com a chegada de uma milícia a uma rua de classe média da cidade do Recife, onde    diferentes narrativas acabam se cruzando. Segundo a Associação Brasileira de Críticos de Cinema (Abraccine), é o 15º melhor filme da história do cinema nacional.",
        ano: 2013,
        direcao: "Kleber Mendonça",
        genero: "Suspense, Drama",
        valor: "3,50",
    },
    {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/pt/2/29/Central_do_Brasil_poster.jpg",
        titulo: "Central do Brasil",
        descricao:
            "Dora, uma ex-professora que escreve cartas na Central do Brasil, e o menino Josué, que fica órfão da noite para o dia. O filme, que emocionou o mundo, recebeu duas indicações ao Oscar: nas categorias melhor filme estrangeiro e melhor atriz.",
        ano: 1998,
        direcao: "Walter Salles",
        genero: "Drama",
        valor: "4,50",
    },
    {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/CidadedeDeus.jpg/220px-CidadedeDeus.jpg",
        titulo: "Cidade de Deus",
        descricao:
            'Nos anos 1960, a favela é um complexo habitacional recém-construído longe do centro do Rio de Janeiro, com pouco acesso à eletricidade e água. Três ladrões amadores conhecido como "Trio Ternura" — Cabeleira, Alicate e Marreco — aterrorizam os negócios locais. Marreco é o irmão de Buscapé. Como Robin Hood, eles dividem parte do dinheiro roubado com os habitantes da favela chamada de Cidade de Deus e, em troca, são protegidos por eles.',
        ano: 2002,
        direcao: "Fernando Meirelles",
        genero: "Drama, Ação",
        valor: "3,50",
    },
    {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2a/TropaDeElitePoster.jpg/250px-TropaDeElitePoster.jpg",
        titulo: "Tropa de Elite",
        descricao:
            "Os acontecimentos do filme são narrados em primeira pessoa pelo Capitão Roberto Nascimento, dando uma perspectiva ao espectador de todos os fatos interligados. O filme começa in medias res, no ano de 1997, em um baile funk no Morro da Babilônia, uma das principais bases do narcotráfico da cidade Rio de Janeiro.",
        ano: 2007,
        direcao: "José Padilha",
        genero: "Drama, Policial",
        valor: "4,99",
    },
];


function main() {
    // Adicionar os filmes na div 
    const divFilmes = document.getElementById("filmes");

    for (let x = 0; x < filmes.length; x++) {
        const section = document.createElement("section");

        section.id = filmes[x].id;

        const img = document.createElement("img")
        const titulo = document.createElement("h2")
        const descricao = document.createElement("p")
        const ul = document.createElement("ul")
        const ano = document.createElement("li")
        const direcao = document.createElement("li")
        const genero = document.createElement("li")
        const valor = document.createElement("li")
        const botao = document.createElement("button")

        img.src = filmes[x].img
        img.width = '100'
        img.height = '150'

        titulo.innerText = filmes[x].titulo
        descricao.innerText = filmes[x].descricao

        ano.innerText = `Ano: ${filmes[x].ano}`
        direcao.innerText = "Direção: " + filmes[x].direcao
        genero.innerText = `Genero: ${filmes[x].genero}`
        valor.innerText = `Valor: R$ ${filmes[x].valor}`

        // botao.id = filmes[x].id

        ul.appendChild(ano)
        ul.appendChild(direcao)
        ul.appendChild(genero)
        ul.appendChild(valor)

        botao.innerText = "Adicionar ao carrinho"
        botao.addEventListener("click", adicionarElementoAoCarrinho)

        section.appendChild(img)
        section.appendChild(titulo)
        section.appendChild(descricao)
        section.appendChild(ul)
        section.appendChild(botao)

        divFilmes.appendChild(section)
        // img, p, ul, 4 li, button
    }

    // renderize os elementos de session storage no elemento HTML carrinho

    renderizarCarrinho()
}

function renderizarCarrinho() {
  for (let x = 0; x < carrinhoDeCompras.length; x++) {
    const carrinhoItem = document.createElement("div")
    carrinhoItem.classList.add("carrinho-item")

    const paragrafo = document.createElement("p")
    const input = document.createElement("input")
    const preco = document.createElement("p")
    const botao = document.createElement("button")

    paragrafo.innerText = carrinhoDeCompras[x].titulo
    preco.innerText = carrinhoDeCompras[x].valor
    botao.innerText = 'X'
    botao.addEventListener("click", removerElementoDoDOM)
    input.value = 1

    carrinhoItem.appendChild(paragrafo)
    carrinhoItem.appendChild(input)
    carrinhoItem.appendChild(preco)
    carrinhoItem.appendChild(botao)

    // 4- Adicionar o novo elemento na div cuja class é carrinho.
    const carrinho = document.querySelector(".carrinho")
    carrinho.appendChild(carrinhoItem)

    const total = document.getElementById("total")
    const valorAtual = +total.innerText.replace("Total: R$ ", "").replace(",", ".")
    const valorFinal = +carrinhoDeCompras[x].valor.replace(",", ".") + valorAtual

    total.innerText = `Total: R$ ${valorFinal.toFixed(2).replace(".", ",")}`
  }
}

function adicionarElementoAoCarrinho(evento) {
    // console.log(evento)

    // 1- Criar um carrinho item
    const carrinhoItem = document.createElement("div")
    carrinhoItem.classList.add("carrinho-item")

    // <div class="carrinho-item"> </div>

    // 2- Obter ID do evento disparado para procurar no array de 
    // filmes qual o filme correspondente
    const sessaoId = evento.target.parentElement.id

    // Obter o objeto no array Filmes cujo id seja igual ao ID da sessão
    const filme = obterFilmeDoArray(sessaoId)

    if (filme != null) {
        // 3- Criar dinamicamente o paragrafo, input, p e button
        const paragrafo = document.createElement("p")
        const input = document.createElement("input")
        const preco = document.createElement("p")
        const botao = document.createElement("button")

        paragrafo.innerText = filme.titulo
        preco.innerText = filme.valor
        botao.innerText = 'X'
        botao.addEventListener("click", removerElementoDoDOM)
        input.value = 1

        carrinhoItem.appendChild(paragrafo)
        carrinhoItem.appendChild(input)
        carrinhoItem.appendChild(preco)
        carrinhoItem.appendChild(botao)

        // 4- Adicionar o novo elemento na div cuja class é carrinho.
        const carrinho = document.querySelector(".carrinho")
        carrinho.appendChild(carrinhoItem)

        const total = document.getElementById("total")
        const valorAtual = +total.innerText.replace("Total: R$ ", "").replace(",", ".")
        const valorFinal = +filme.valor.replace(",", ".") + valorAtual

        total.innerText = `Total: R$ ${valorFinal.toFixed(2).replace(".", ",")}`

        const car2 = {
          titulo: filme.titulo,
          valor: filme.valor
        }

        carrinhoDeCompras.push(car2)

        sessionStorage.setItem("carrinho", JSON.stringify(car2))
    }
    verificarBotaoFinalizarCompra()
}

function obterFilmeDoArray(id) {
    for (let x = 0; x < filmes.length; x++) {
        if (filmes[x].id == id) {
            return filmes[x]
        }
    }
    return null;
}

function removerElementoDoDOM(evento) {
    const carrinhoItem = evento.target.parentElement
    const pCarrinhoItem = carrinhoItem.querySelectorAll("p")
    const precoCarrinhoItem = +pCarrinhoItem[1].innerText.replace(',','.')
    console.log()
    
    const total = document.getElementById("total")
    const valorAtual = +total.innerText.replace("Total: R$ ", "").replace(",", ".")
    const valorFinal = valorAtual - precoCarrinhoItem
    
    total.innerText = `Total: R$ ${valorFinal.toFixed(2).replace(".", ",")}`
    carrinhoItem.remove()
    verificarBotaoFinalizarCompra()
}

function verificarBotaoFinalizarCompra() {
  const listaDeCarrinhoItem = document.querySelectorAll('.carrinho-item')
  const botaoFinalizar = document.getElementById("finalizar-compra")

  if (listaDeCarrinhoItem.length != 0) {
    // mudar a classe do botão finalizar compra
    if (botaoFinalizar.classList.length === 0) {
      botaoFinalizar.classList.add("finalizar-compra")
    }
  } else {
    // removo a classe finalizar compra
    botaoFinalizar.classList.remove("finalizar-compra")
  }
}