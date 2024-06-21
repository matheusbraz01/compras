let total = 0;
document.getElementById('lista-produtos').innerHTML = 'vazio';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar () {
//recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-') [0];
    let valorProduto = produto.split('R$') [1];
    let quantidade = document.getElementById('quantidade').value;

//calcular preço, o subtotal
    let preco = quantidade * valorProduto; 

 //add carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML + `  <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`

  //valor total
     total = total + preco;
     let campoTotal = document.getElementById('valor-total');
     campoTotal.textContent = `R$${total}`
    document.getElementById('quantidade').value = 0;

}
function limpar () {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = 'vazio';
    document.getElementById('valor-total').textContent = 'R$ 0';
}