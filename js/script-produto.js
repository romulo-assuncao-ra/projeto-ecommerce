//script para favoritar o coração
let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener('click', function(event){
    //dentro da minha target tudo que tiver o nome de I
    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red");
        //estrutura pronta do JS:
    }
});

//script para incrementar e decrementar o numero de produtos

let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector(".bi-plus-square");
let txtQtd = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(txtQtd.textContent);
count = 0

incrementar.addEventListener("click", function(){
    quantidadeProduto++;
    txtQtd.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function(){
    if(quantidadeProduto<=1){
        alert("A quantidade de produto não pode ser menor que 1.");
    }
    else{
        quantidadeProduto--;
        txtQtd.innerHTML = quantidadeProduto;
        
    }
});

