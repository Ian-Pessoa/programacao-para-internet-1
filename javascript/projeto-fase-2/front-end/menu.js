window.addEventListener("load", main);

async function main() {
  const resultado1 = await fetch('http://localhost:3333/api/pratos');
  const converterResultadoParaJson1 = await resultado1.json();

  const resultado2 = await fetch('http://localhost:3333/api/bebidas');
  const converterResultadoParaJson2 = await resultado2.json();

  const resultado3 = await fetch('http://localhost:3333/api/sobremesas');
  const converterResultadoParaJson3 = await resultado3.json();

  pratos = converterResultadoParaJson1;
  bebidas = converterResultadoParaJson2;
  sobremesas = converterResultadoParaJson3;

  adicionarElementos(".js-borda-menu", pratos);
  adicionarElementos(".js-borda-menu-2", bebidas);
  adicionarElementos(".js-borda-menu-3", sobremesas);

  function adicionarElementos(secao, itens) {
    const div = document.querySelector(secao);
    div.style.marginRight = "20px";

    for (let x = 0; x < itens.length; x++) {
      const section = document.createElement("section");
      const img = document.createElement("img");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const prato = document.createElement("p");
      const preco = document.createElement("p");
      const descricao = document.createElement("p");

      //APLICANDO ESTILOS
      img.width = "80";
      img.height = "80";
      img.style.borderRadius = "40px";
      img.style.objectFit = "cover";
      img.style.marginRight = "20px"; 

      prato.style.color = "rgba(0, 0, 0, 0.8)";
      prato.style.fontSize = "17px";
      prato.style.fontWeight = "500";
      prato.style.lineHeight = "1.5";
      prato.style.width = "110px";

      preco.style.color = "#e52b34";
      preco.style.fontSize = "20px";
      preco.style.fontWeight = "600";
      preco.style.lineHeight = "1.3";

      descricao.style.color = "rgba(0, 0, 0, 0.8)";
      descricao.style.fontSize = "16px";
      descricao.style.fontWeight = "400";
      descricao.style.lineHeight = "2";
      descricao.style.width = "200";

      section.style.display = "flex";
      section.style.marginBottom = "40px";

      div3.style.display = "flex";
      div3.style.justifyContent = "space-between";

      //ADICIONANDO ELEMENTOS
      img.src = itens[x].img;
      prato.textContent = itens[x].prato;
      preco.textContent = itens[x].preco;
      descricao.textContent = itens[x].descricao;

      div3.appendChild(prato);
      div3.appendChild(preco);
      div2.appendChild(div3);
      div2.appendChild(descricao);
      section.appendChild(img);
      section.appendChild(div2);

      div.appendChild(section);
    }
  }
}