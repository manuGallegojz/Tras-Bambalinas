class carrito {


    constructor(productos,detallesOrden)
    {
        this.productos=productos,
        this.detallesOrden=detallesOrden
    }

    agregar(producto){

        localStorage.setItem(localStorage.length, JSON.stringify(producto));

    }



}