let total = 0

function adicionar()
{
    let produto = document.getElementById('produto').value;
    let produtoNome = produto.split('-')[0];
    let produtoValor = produto.split('R$')[1];
    // a tag split separa uma string em um array, sendo que ele cria uma separação exatamente na marca definida.
    let quantidade = document.getElementById('quantidade').value;
    let subtotal = produtoValor * quantidade;

    let lista_produtos = document.getElementById('lista-produtos');
    lista_produtos.innerHTML = lista_produtos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

    total = total + subtotal;
    let total_tela = document.getElementById('valor-total');
    total_tela.innerHTML = `R$${total}`;
}

function limpar()
{
    let lista_produtos = document.getElementById('lista-produtos');
    lista_produtos.innerHTML = ` `;
    total = 0
    let total_tela = document.getElementById('valor-total');
    total_tela.innerHTML = `R$0`;
}
