$( document ).ready(function() {

    ingreso();

    registroCarrito()

});

//Ingreso del usuario

function ingreso(){

    if(localStorage.getItem("usuario")){

        cerrarModal();

        const usuarioObjeto = JSON.parse(localStorage.getItem("usuario"));

        botonSesion(usuarioObjeto.nombre);

        registroUsuario();

    }else{

        mostrarModal($(".headerBoton"));

        registroUsuario();

        botonSesion("Iniciar Sesión");

    }

}

//Registro

function registroUsuario(){

    let nombre = $(".nombreRegistro");
    let apellido = $(".apellidoRegistro");
    let email = $(".emailRegistro");
    let clave = $(".claveRegistro");

    $(".registroBoton").click(()=>{

        const nuevoUsuario = new usuario(
            nombre.val(),
            apellido.val(),
            email.val(),
            clave.val()
        )

        localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

        location.reload();
    })

}

//Mostrar los modales correspondientes

function mostrarModal(ubicacionBoton){
    
    let boton = ubicacionBoton;

    boton.click(()=>{
        $(".modalAnimacion1").modal({
            fadeDuration: 500
        });
    })

    let botonRegistro = $(".botonRegistro");

    botonRegistro.click(()=>{
        $(".modalAnimacion2").modal({
            fadeDuration: 700
        });
    })

}

//Cierre de los modales

function cerrarModal(){
    
    let botonHeader = $(".headerBoton");

    let botonCerrarSesion = $(".botonCerrarSesion");

    botonHeader.click(()=>{
        $(".modalAnimacion3").modal({
            fadeDuration: 700
        });
    })

    botonCerrarSesion.click(()=>{

        localStorage.removeItem("usuario");

        mostrarModal(botonHeader);

        botonSesion("Iniciar Sesión");

        $(".modalAnimacion4").modal({
            fadeDuration: 700
        });

    }
    )

}

//Dependiendo de si está logueado, se muestra el nombre o no.

function botonSesion(estado){

    $(".headerBoton").html("");

    estadoMayuscula = estado.charAt(0).toUpperCase() + estado.slice(1);

    $(".headerBoton").append(estadoMayuscula);

}

//registroCarrito

function registroCarrito(){

    const nodoModalCarrito = $(".modalCarrito");

    if(localStorage.getItem(1)){

    if(localStorage.getItem("usuario")){

        nodoModalCarrito.click(()=>{
            $(location).attr('href','compra.html');
        })

    }else{

        mostrarModal(nodoModalCarrito);

        registroUsuario();

    }

    }else{
        nodoModalCarrito.click(()=>{

            $(".modalAnimacion5").modal({
                fadeDuration: 700
            });

        })
    }

}