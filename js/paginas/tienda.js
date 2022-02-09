$(function()

{
    let variableOrden = productos.sort((a,b)=>{
        let valor;

        a.titulo < b.titulo ? valor = -1 : valor = 1;

        return valor

        return 0;
    })

    mostrarProductos("" , variableOrden);
});



function mostrarProductos(categoriaId, listaProductos){

    const nodoTienda = $("#productos")
                        .html("");

    let cantidadProductos = localStorage.length-1;

    $(".circuloCarrito").html(cantidadProductos);

    if(categoriaId != ""){

    listaProductos = productos.filter(elemento => elemento.categoria == categoriaId);

    }

    for(var i=0;i<listaProductos.length; i++)
    {
        
        let producto = listaProductos[i];

        let productoMuestra = $("<div></div>")
                                .addClass("productoCaja")
                                .html(`<img class="productoImagen" src=../${producto.imagen} alt="Cotillon">

                                <div class="margenTop3 productoInfo flexColumnBetween">
                                    <h5>${producto.titulo}</h5>
                                    <div class="flexRowBetween flexEnd">
                                        <p class="margenTop4">$${producto.precio}</p>
                                        <p class="textoStock">Stock: ${producto.stock}</p>
                                    <div>
                                </div>`);

            nodoTienda.append(productoMuestra[0]);

            let botonComprar = $("<button></button>")
                                    .html("Agregar Producto")
                                    .addClass("boton_agregar_carrito margenTop4")
                                    .click(() =>{
                                        carritoCompras.agregar(producto);

                                        cantidadProductos++;
                                        
                                        $(".circuloCarrito").html(cantidadProductos);
                                        
                });

                $(".productoInfo")[i].append(botonComprar[0]);

    }

}
