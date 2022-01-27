$(function()

{
    mostrarProductos("" , productos);
    filtros();
});



function mostrarProductos(categoriaId, listaProductos){

    const nodoTienda = $("#productos")
                        .html("");

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

                });

                $(".productoInfo")[i].append(botonComprar[0]);

    }

}

const elementoFiltros = $(".filtros")
                        .html("<h2>Filtros</h2>");

function filtros(){

    // Categorías

    filtroCategorias();

    //Filtro por precio

    filtroOrden();

    //Colores

    funcionColores();

    //Limpiar_filtros

    limpiarFiltros();

    //Otros productos

    //otrosProductos();

}

function constructorFiltros(titulo, filtros){

    let elementoConstructor = $("<div></div>")
                                .addClass("margenTop3")
                                .html(`<h5>${titulo}</h5>`)
                                .append(filtros);

    elementoFiltros.append(elementoConstructor);

}

function filtroCategorias(){

    listaCategorias = $("<div></div>");

    for(categoria of categorias) {

        let itemCategorias = $("<ul></ul>")
                                .html(`<li>${categoria.titulo}</li>`)
                                .attr("onclick",`mostrarProductos(${categoria.id})`);

                                listaCategorias.append(itemCategorias);

    }

    constructorFiltros("Categorías", listaCategorias);

}


function filtroOrden(){

    listaOrden = $("<div></div>");

        let itemOrden = $("<ul></ul>")
                                .addClass("orden");

                                let hola = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Alfabéticamente (A-Z)")
                            .click(()=>{
                                let variableOrden = productos.sort(funcionOrdenarAlfabeticamente)

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola[0]);

                            let hola2 = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Ordenar por precio")
                            .click(()=>{
                                let variableOrden = productos.sort(funcionOrdenarPrecio)

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola2[0]);

                            let hola3 = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Ordenar por stock")
                            .click(()=>{
                                let variableOrden = productos.sort(funcionOrdenarStock)

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola3[0]);

                            let hola4 = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Ordenar por relevancia")
                            .click(()=>{
                                let variableOrden = productos.sort(funcionOrdenarRelevancia)

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola4[0]);



                                listaOrden.append(itemOrden);



    constructorFiltros("Ordenar", itemOrden);

}

function funcionOrdenarAlfabeticamente(a, b){

    if(a.titulo < b.titulo){
        return -1;
    }


    if(a.titulo > b.titulo){
        return 1;
    }

    return 0;

}

function funcionOrdenarPrecio(a, b){
    if(a.precio < b.precio){
        return -1;
    }


    if(a.precio > b.precio){
        return 1;
    }

    return 0;

}

function funcionOrdenarStock(a, b){
    if(a.stock < b.stock){
        return -1;
    }


    if(a.stock > b.stock){
        return 1;
    }

    return 0;

}

function funcionOrdenarRelevancia(a, b){
    if(a.estrellas < b.estrellas){
        return -1;
    }


    if(a.estrellas > b.estrellas){
        return 1;
    }

    return 0;

}



function funcionColores(){

    constructorFiltros("Colores");

    elementoColores = $("<div></div>")
                        .addClass("flex");

    for (const color of colores) {
        let variableColores = $("<div></div>")
                        .html(`<div class="tiendaColores margenRight" style="
                            background-color: ${color.css};
                        "></div>`)
                        .click(()=>{
                            let productosColores = productos.filter(element => element.color == color.color);

                            mostrarProductos("", productosColores)
                        });
        $(elementoColores).append(variableColores)
    }

    $(elementoFiltros).append(elementoColores)
}

function limpiarFiltros(){

let botonFiltros = $("<button></button>")
                    .html("Limpiar filtros")
                    .click(() =>{
        mostrarProductos("" , productos);
    });

    constructorFiltros("" , botonFiltros);

}
