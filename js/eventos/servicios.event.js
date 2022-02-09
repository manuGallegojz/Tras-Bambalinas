$( document ).ready(function() {

    generalServicios();

    serviciosReposteria();

    serviciosAmbientaciones();

    serviciosCotillon();

    serviciosSouvenirs();

});

function generalServicios(){

    $(".serviciosDescripcion").hide();

};

//Reposteria

function serviciosReposteria(){

    $(".serviciosReposteria").css("cursor", "pointer")
                        .mouseenter(animacionDesaparecerReposteria);

    $(".serviciosReposteria").css("cursor", "pointer")
                    .mouseleave(animacionAparecerReposteria);

}

function animacionDesaparecerReposteria(){

    $(".serviciosTituloReposteria").fadeOut(100, ()=>{
        $(".serviciosDescripcionReposteria").fadeIn();
    });
        
    

}

function animacionAparecerReposteria(){
    
    $(".serviciosDescripcionReposteria").fadeOut(100, ()=>{
        $(".serviciosTituloReposteria").fadeIn();
    });
}

//Ambientaciones

function serviciosAmbientaciones(){

    $(".serviciosAmbientaciones").css("cursor", "pointer")
                        .mouseenter(animacionDesaparecerAmbientaciones);

    $(".serviciosAmbientaciones").css("cursor", "pointer")
                    .mouseleave(animacionAparecerAmbientaciones);

}

function animacionDesaparecerAmbientaciones(){

    $(".serviciosTituloAmbientaciones").fadeOut(100, ()=>{
        $(".serviciosDescripcionAmbientaciones").fadeIn();
    });
        
    

}

function animacionAparecerAmbientaciones(){
    
    $(".serviciosDescripcionAmbientaciones").fadeOut(100, ()=>{
        $(".serviciosTituloAmbientaciones").fadeIn();
    });
}

//Cotillon

function serviciosCotillon(){

    $(".serviciosCotillon").css("cursor", "pointer")
                        .mouseenter(animacionDesaparecerCotillon);

    $(".serviciosCotillon").css("cursor", "pointer")
                    .mouseleave(animacionAparecerCotillon);

}

function animacionDesaparecerCotillon(){

    $(".serviciosTituloCotillon").fadeOut(100, ()=>{
        $(".serviciosDescripcionCotillon").fadeIn();
    });
        
    

}

function animacionAparecerCotillon(){
    
    $(".serviciosDescripcionCotillon").fadeOut(100, ()=>{
        $(".serviciosTituloCotillon").fadeIn();
    });
}

//Souvenirs

function serviciosSouvenirs(){

    $(".serviciosSouvenirs").css("cursor", "pointer")
                        .mouseenter(animacionDesaparecerSouvenirs);

    $(".serviciosSouvenirs").css("cursor", "pointer")
                    .mouseleave(animacionAparecerSouvenirs);

}

function animacionDesaparecerSouvenirs(){

    $(".serviciosTituloSouvenirs").fadeOut(100, ()=>{
        $(".serviciosDescripcionSouvenirs").fadeIn();
    });
        
    

}

function animacionAparecerSouvenirs(){
    
    $(".serviciosDescripcionSouvenirs").fadeOut(100, ()=>{
        $(".serviciosTituloSouvenirs").fadeIn();
    });
}