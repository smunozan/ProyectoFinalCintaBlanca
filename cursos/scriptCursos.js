// boton de inicio

$("#empezar").click(function(){
	$(window).scrollTop($('#main').offset().top);
})

//iniciar sesion
$("#botonIniciar").click(function(){
	$("#iniciarSesion").css("display", "flex")
})

//no es usuario
$("#perfil").click(function(){
	$("#noEsUsuario").css("display", "flex")
})

$("#registro1").click(function(){
	 $("#iniciarSesion").css("display", "none")
	 $("#noEsUsuario").css("display", "none")
	 $("#registro").css("display", "flex")
  })

//registro

$("#botonRegistrar").click(function(){
	$("#registro").css("display", "flex")
})

$("#registrarme").click(function(){
	$("#registro").css("display", "none")
})

// filtros

$("#desarrolloWeb").hover(function(){
	$("#menuDesarrolloWeb").show()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
	$("#menuVideojuegos").hide()
	$("#menuMasOpciones").hide()
})

// -----------------

$("#aplicacionesMoviles").hover(function(){
	$("#menuAplicacionesMoviles").show()
	$("#menuDesarrolloWeb").hide()
	$("#menuLenguajesProgramacion").hide()
	$("#menuVideojuegos").hide()
	$("#menuMasOpciones").hide()
})

// -----------------

$("#LenguajesProgramacion").hover(function(){
	$("#menuLenguajesProgramacion").show()
	$("#menuDesarrolloWeb").hide()
	$("#menuAplicacionesMoviles").hide()
	$("#menuVideojuegos").hide()
	$("#menuMasOpciones").hide()
})

// -----------------

$("#videojuegos").hover(function(){
	$("#menuVideojuegos").show()
	$("#menuDesarrolloWeb").hide()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
	$("#menuMasOpciones").hide()
})

// -----------------

$("#masOpciones").hover(function(){
	$("#menuMasOpciones").show()
	$("#menuVideojuegos").hide()
	$("#menuDesarrolloWeb").hide()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
})

// funcionamiento de filtros
	// desarrollo web
$("#javascript").click(function(){
	$("#curso1").show()
	$("#curso2").show()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").show()
	$("#curso6").show()
	$("#curso7").show()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").show()
	$("#curso11").show()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").show()
	$("#curso18").show()
	$("#curso19").show()
	$("#curso20").show()

	$("#curso1").show()
	$("#curso2").hide()
	$("#curso3").show()
	$("#curso4").hide()
	$("#curso5").show()
	$("#curso6").show()
	$("#curso7").hide()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").hide()
	$("#curso11").show()
	$("#curso12").hide()
	$("#curso13").hide()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").hide()
	$("#curso18").show()
	$("#curso19").hide()
	$("#curso20").show()
})

$("#HTML").click(function(){
	$("#curso1").show()
	$("#curso2").show()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").show()
	$("#curso6").show()
	$("#curso7").show()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").show()
	$("#curso11").show()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").show()
	$("#curso18").show()
	$("#curso19").show()
	$("#curso20").show()

	$("#curso1").hide()
	$("#curso2").hide()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").show()
	$("#curso6").hide()
	$("#curso7").hide()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").show()
	$("#curso11").hide()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").show()
	$("#curso18").show()
	$("#curso19").show()
	$("#curso20").hide()
})

$("#CSS").click(function(){
$("#curso1").show()
	$("#curso2").show()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").show()
	$("#curso6").show()
	$("#curso7").show()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").show()
	$("#curso11").show()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").show()
	$("#curso18").show()
	$("#curso19").show()
	$("#curso20").show()

	$("#curso1").hide()
	$("#curso2").hide()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").hide()
	$("#curso6").show()
	$("#curso7").hide()
	$("#curso8").hide()
	$("#curso9").hide()
	$("#curso10").show()
	$("#curso11").hide()
	$("#curso12").show()
	$("#curso13").hide()
	$("#curso14").show()
	$("#curso15").hide()
	$("#curso16").hide()
	$("#curso17").show()
	$("#curso18").hide()
	$("#curso19").hide()
	$("#curso20").hide()
})

$("#react").click(function(){
$("#curso2").show()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").show()
	$("#curso6").show()
	$("#curso7").show()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").show()
	$("#curso11").show()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").show()
	$("#curso18").show()
	$("#curso19").show()
	$("#curso20").show()

	$("#curso1").hide()
	$("#curso2").hide()
	$("#curso3").hide()
	$("#curso4").show()
	$("#curso5").hide()
	$("#curso6").hide()
	$("#curso7").show()
	$("#curso8").hide()
	$("#curso9").hide()
	$("#curso10").show()
	$("#curso11").hide()
	$("#curso12").show()
	$("#curso13").hide()
	$("#curso14").hide()
	$("#curso15").hide()
	$("#curso16").hide()
	$("#curso17").show()
	$("#curso18").hide()
	$("#curso19").hide()
	$("#curso20").hide()
})

$("#bootstrap").click(function(){
	$("#curso1").show()
	$("#curso2").show()
	$("#curso3").show()
	$("#curso4").show()
	$("#curso5").show()
	$("#curso6").show()
	$("#curso7").show()
	$("#curso8").show()
	$("#curso9").show()
	$("#curso10").show()
	$("#curso11").show()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").show()
	$("#curso15").show()
	$("#curso16").show()
	$("#curso17").show()
	$("#curso18").show()
	$("#curso19").show()
	$("#curso20").show()

	$("#curso1").show()
	$("#curso2").hide()
	$("#curso3").hide()
	$("#curso4").show()
	$("#curso5").hide()
	$("#curso6").hide()
	$("#curso7").hide()
	$("#curso8").show()
	$("#curso9").hide()
	$("#curso10").show()
	$("#curso11").hide()
	$("#curso12").show()
	$("#curso13").show()
	$("#curso14").hide()
	$("#curso15").show()
	$("#curso16").hide()
	$("#curso17").show()
	$("#curso18").hide()
	$("#curso19").show()
	$("#curso20").show()
})





// detalle de cursos
	//curso1

$("#curso1").click(function(){
	$("#cajaDetalles1").css("display", "flex")
})

$("#cajaDetalles1").click(function(){
	$("#cajaDetalles1").css("display", "none")
})

$("#empezar1").click(function(){
	 window.open("https://www.udemy.com/programacion-de-android-desde-cero/");
    return false;
  })