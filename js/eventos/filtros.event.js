$(function()

{
    // Categorías

    filtroCategorias();

    //Filtro por precio

    filtroOrden();

    //Colores

    funcionColores();

    //Limpiar_filtros

    limpiarFiltros();
});

const elementoFiltros = $(".filtros")
                        .html("<h2>Filtros</h2>");

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

                            let hola2 = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Ordenar por precio")
                            .click(()=>{
                                let variableOrden = productos.sort((a,b)=>{
                                    let valor;

                                    a.precio < b.precio ? valor = -1 : valor = 1;

                                    return valor

                                    return 0;
                                })

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola2[0]);

                            let hola3 = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Ordenar por stock")
                            .click(()=>{
                                let variableOrden = productos.sort((a,b)=>{
                                    let valor;

                                    a.stock < b.stock ? valor = -1 : valor = 1;

                                    return valor

                                    return 0;
                                })

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola3[0]);

                            let hola4 = $("<li></li>")
                            .addClass("listaOrden")
                            .html("Ordenar por relevancia")
                            .click(()=>{
                                let variableOrden = productos.sort((a,b)=>{
                                    let valor;

                                    a.estrellas < b.estrellas ? valor = -1 : valor = 1;

                                    return valor

                                    return 0;
                                })

                                mostrarProductos("", variableOrden)
                            });

                            itemOrden.append(hola4[0]);

                                listaOrden.append(itemOrden);



    constructorFiltros("Ordenar", itemOrden);

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
                    .click(()=>{
                        let variableOrden = productos.sort((a,b)=>{
                            let valor;
                    
                            a.titulo < b.titulo ? valor = -1 : valor = 1;
                    
                            return valor
                    
                            return 0;
                        })
                        mostrarProductos("", variableOrden)
                    });

    constructorFiltros("" , botonFiltros);

}
