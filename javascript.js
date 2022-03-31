// Function to select one box from the same row and deselect a previous
function boxclick(objetoClicado, objetoSelecionado){
    
    const selecao = objetoSelecionado + ' .caixaSelecionada';
    const selecionadoAnterior = document.querySelector(selecao);


    if (selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('caixaSelecionada');
    }
    
    const caixa = document.querySelector(objetoClicado);
    caixa.classList.add('caixaSelecionada');

}

// Function to verify three types of food are selected
function verify() {
    let prato = document.querySelector('#prato-row .caixaSelecionada');
    let bebida = document.querySelector('#bebida-row .caixaSelecionada');
    let sobremesa = document.querySelector('#sobremesa-row .caixaSelecionada');
    
    const cart = document.querySelector('.carrinho');
    
    if(prato !== null){
        if(bebida !== null){
            if(sobremesa !== null){
                cart.classList.add('carrinho-cheio');
                document.querySelector('.texto-carrinho').innerHTML = "Fechar pedido";
            }
            else{
                document.querySelector('.texto-carrinho').innerHTML = "Escolha 3 itens para prosseguir";
                
            }
        }
    }
}

setInterval(verify,300);

// let textoprato = encodeURIComponent(document.querySelector('#prato-row .caixaSelecionada p').innerHTML + " - " + document.querySelector('#prato-row .caixaSelecionada .product-price').innerHTML);
// let textobebida = encodeURIComponent(document.querySelector('#bebida-row .caixaSelecionada p').innerHTML + " - " + document.querySelector('#bebida-row .caixaSelecionada .product-price').innerHTML);
// let textosobremesa = encodeURIComponent(document.querySelector('#sobremesa-row .caixaSelecionada p').innerHTML + " - " + document.querySelector('#sobremesa-row .caixaSelecionada .product-price').innerHTML);
// let text1 = encodeURIComponent("Olá, gostaria de fazer o *pedido*:");
// let text2 = encodeURIComponent("Total: R$ 27,80")

// let textoTodo =  text1 + "%0A" + textoprato + "%0A" + textobebida + "%0A" + textosobremesa + "%0A" + text2;
// const watext = 'https://wa.me/?text=' + textoTodo;


// Function to open cart on click if full
function finishclick(){
    if (document.querySelector('.texto-carrinho').innerHTML == "Fechar pedido"){
        // alert(textoTodo);
        console.log('Funciona');
        // location.href(watext);
    }
}

//  https://wa.me/?text=Gostaria%20de%20saber%20o%20preço%20do%20apartamento
// line breaks em uri: %0A