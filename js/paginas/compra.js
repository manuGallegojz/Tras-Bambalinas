$( document ).ready(function() 
{
    funcionNumeroPedido();
    limpiarLocal();

});

function funcionNumeroPedido(){
    $(".numeroPedido").html(`Número del pedido: ${Math.floor(Math.random(1000, 10000)*1000000)}`)
}

function limpiarLocal(){

    let cantidad = localStorage.length+1;

    for(i = 0;cantidad > i; i++)
        {
        localStorage.removeItem(i);
        }
    }