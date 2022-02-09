$( document ).ready(function() 
{
    mostrarCarrito();

    vaciarCarrito();

    mostrarModalCarrito();

});


function mostrarCarrito(){

    let suma = 0;

    const nodoCarrito = $("#carrito")
                            .html("");

    if(localStorage.length > 1){

    for (i=1; i < localStorage.length; i++) {
    
    const productosAlmacenados = localStorage.getItem(i);

    let productoFinal = JSON.parse(productosAlmacenados);

        const productoMuestra = $("<div></div>")
        .addClass(`producto_carrito`)
        .html(`<div class="cajaProductoCarrito flexRowBetween margenTop3 margenBot3">

                <div class="flex">
                    <img class="productoImagenCarrito margenRight2" src="../${productoFinal.imagen}" alt="">

                    <div class="carritoProductoInfo">
                        <h5>${productoFinal.titulo}</h5>

                        <p class="margenTop3">$${productoFinal.precio}</p>
                    </div>
                </div>
                </div>
    `);

    nodoCarrito.prepend(productoMuestra);

    const nodoInformacionProducto = $(".carrito_informacion_producto")[0];

    suma += productoFinal.precio;

}}
else{

    const carritoVacio = $("<div></div>")
                        .addClass("carrito_vacio")
                        .html(`<div>
                                <p>Tu carrito está vacío.<p>
                                </div>`);

                                nodoCarrito.prepend(carritoVacio[0]);

}
const nodoVolver = $(".boton_volver")
                    .html("");

//TOTAL

    funcionTotal(suma);

}

function funcionTotal(suma){

const nodoInformacion = $(".total")
                        .html("");

let sumaTotal = $("<div></div>")
                .html(`<div>
                        <h5>Total: $${suma}</h5>
                        </div>`);

nodoInformacion.append(sumaTotal);

}

function vaciarCarrito(){

    $(".vaciarCarro").click(()=>{
        let cantidad = localStorage.length+1;

        for(i = 0;cantidad > i; i++)
        {
            localStorage.removeItem(i);
        }

        mostrarCarrito();
    })

}

function mostrarModalCarrito(){

    let boton = $(".modalAnimacionCarrito1");

    boton.click(()=>{
        $(".modalAnimacionCarrito1").modal({
            fadeDuration: 500
        });
    })

}
