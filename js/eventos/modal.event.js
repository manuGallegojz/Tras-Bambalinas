$( document ).ready(function() {

    registro();

    registroCarrito()

});

function registro(){

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

function botonSesion(estado){

    $(".headerBoton").html("");

    estadoMayuscula = estado.charAt(0).toUpperCase() + estado.slice(1);

    $(".headerBoton").append(estadoMayuscula);

}

function inicioSesion(){

    let valorEmail = $(".valorEmail").val();

    let valorClave = $(".valorClave").val();

    const usuarioObjeto = JSON.parse(localStorage.getItem("usuario"));

    if(valorEmail === usuarioObjeto.email && valorClave === usuarioObjeto.clave)
    {
        cerrarModal();

        const usuarioObjeto = JSON.parse(localStorage.getItem("usuario"));

        botonSesion(usuarioObjeto.nombre);

    }else {

        $(".modalAnimacion1").append(`<p>El email o contraseña no son correctos</p>`)

    }

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