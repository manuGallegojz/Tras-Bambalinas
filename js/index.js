$( document ).ready(function() {

    animaciones();

    funcionProductos();


});

function animaciones(){

    funcionCarrito();

    funcionScroll();

    funcionCategorias();

    servicios();

    destacados();

}

const carritoCompras = new carrito([], {});

function funcionCarrito(){

    $(".circuloCarrito").html(localStorage.length);

    $(".headerCarritoDespegable").hide();

                                $(".carritoIcono")
                                .mouseenter(()=>{
                                    $(".headerCarritoDespegable")
                                    .fadeIn(200);

                                    $(".headerCarritoDespegable").mouseenter(()=>{
                                        $(".headerCarritoDespegable").show();
                                        });
                                    
                                })

                                $(".headerCarritoDespegable").mouseleave(()=>{
                                    $(".headerCarritoDespegable")
                                    .fadeOut(200)
                                })

    links_navegacion();

}

function links_navegacion(){

    if(window.location.href == "file:///D:/proyecto/index.html"){

        mostrarCarritoDesplegable("");
    }else{
        mostrarCarritoDesplegable("../");
    }
}

function mostrarCarritoDesplegable(ubicacionPagina){

    let suma = 0;

    const nodoProductosDesplegable = $(".productosCarritoDesplegable")
                                    .html("");

    if(localStorage.length > 0){

    for (i = 1; i < localStorage.length; i++) {

    let productosAlmacenados = localStorage.getItem(i);

    let productoFinal = JSON.parse(productosAlmacenados);

    const productoMuestra = $("<div></div>")
                            .addClass("carritoDesplegableProducto margenBot3 flex")
                            .html(`
                            <img src="${ubicacionPagina}${productoFinal.imagen}" alt="">

                            <div>

                                    <p class="margenTop4">${productoFinal.titulo}</p>

                                <p>$${productoFinal.precio}</p>

                            </div>
                        `);

                        nodoProductosDesplegable.prepend(productoMuestra);

                        suma += productoFinal.precio;

    if(i == 3) break;

    }

    
}
else{

    const carritoVacio = $("<div></div>")
                        .addClass("carrito_vacio")
                        .html(`<div>
                                <p>Tu carrito está vacío.<p>
                                </div>`);

                                nodoProductosDesplegable.prepend(carritoVacio[0]);

}

funcionTotalCarritoDesplegable();

$(".botonCarritoDesplegable").html("Ver carrito")
                        .addClass("margenTop4")
                        
}

function funcionTotalCarritoDesplegable(){

    let suma = 0;

    if(localStorage.length > 0){

        for (i=1; i < localStorage.length; i++) {

            suma += JSON.parse(localStorage.getItem(i)).precio;

        }}

    $(".totalCarritoDesplegable").html(`Total: $${suma}`);
};

function funcionScroll(){
    
$(document).ready(function() {

    $('a[href^="#"]').click(function() {

            var destino = $(this.hash);
        if (destino.length == 0) {

        destino = $('a[name="' + this.hash.substr(1) + '"]');

        }

        if (destino.length == 0) {
        destino = $('html');
        }

        $('html, body').animate({ scrollTop: destino.offset().top }, 1500);
        return false;

    });
    });
}

function funcionCategorias(){

    const nodo = $(".categoriasCaja");

    nodo.click((evento)=>{
        const idNodo  = evento.target.id;
        const NodoDiv = `#${idNodo}`;
        const div = $(NodoDiv);

        div.animate({
            "opacity":0.5
        })
        
        setTimeout("window.open('file:///D:/proyecto/html/tienda.html')");
    })

    nodo.mouseleave((evento)=>{
        const idNodo  = evento.target.id;
        const NodoDiv = `#${idNodo}`;
        const div = $(NodoDiv);

        div.animate({
            "opacity":1
        })
    })
    

}


function servicios(){

    $(".serviciosDescripcion").hide();

    $(".serviciosCaja").css("cursor", "pointer")
                        .mouseenter(animacionDesaparecer);

    $(".serviciosCaja").css("cursor", "pointer")
                    .mouseleave(animacionAparecer);

}

function animacionDesaparecer(){

    $(".serviciosTitulo").fadeOut("fast", ()=>{
        $(".serviciosDescripcion").fadeIn();
    });
        
    

}

function animacionAparecer(){
    
    $(".serviciosDescripcion").fadeOut("fast", ()=>{
        $(".serviciosTitulo").fadeIn();
    });
}


function funcionProductos(){

    for(var i=0;i<productos.length; i++)
    {

        let producto = productos[i];

        const nodoProductosDestacados = $("#productosDestacados");

        let productosBloque = $("<div></div>")
                            .addClass("productoCaja")
                            .html(`<img class="productoImagen" src=${producto.imagen} alt="Cotillon">

                        <div class="margenTop3 productoInfo">
                            <h5>${producto.titulo}</h5>
                        

                            <p class="margenTop4">$${producto.precio}</p>

                        </div>`);

        nodoProductosDestacados.prepend(productosBloque[0]);

        let botonComprar = $("<button></button>")
                                .html("Agregar Producto")
                                .addClass("boton_agregar_carrito margenTop4")
                                .click(() =>{
                                carritoCompras.agregar(producto)
            });

            productosBloque.append(botonComprar[0]);

            if(i == 3) break;

    }

}

function destacados(){

    const nodo = $(".animarIcono");

    nodo.on("mouseover", (event)=>{
        const idNodo  = event.target.id;
        const NodoDiv = `#${idNodo}`;
        const div = $(NodoDiv);

        div.css("position", "relative")

        div.animate({
            fontSize: "+=5px",
            color: "#111111"
        })
    })

    nodo.on("mouseout", (event)=>{
        const idNodo  = event.target.id;
        const NodoDiv = `#${idNodo}`;
        const div = $(NodoDiv);

        div.animate({
            fontSize: "-=5px"
        })
    })

}