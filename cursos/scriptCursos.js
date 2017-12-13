// boton de inicio

$("#empezar").click(function(){
	$(window).scrollTop($('#main').offset().top);
})

// filtros

$("#desarrolloWeb").hover(function(){
	$("#menuDesarrolloWeb").show()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
	$("#menuVideojuegos").hide()
	$("#menuMasOpciones").hide()
})

$("#menuDesarrolloWeb").hover(function(){
	$("#menuDesarrolloWeb").show()
},function() {
	$("#menuDesarrolloWeb").hide()
})

// -----------------

$("#aplicacionesMoviles").hover(function(){
	$("#menuAplicacionesMoviles").show()
	$("#menuDesarrolloWeb").hide()
	$("#menuLenguajesProgramacion").hide()
	$("#menuVideojuegos").hide()
	$("#menuMasOpciones").hide()
})

$("#menuAplicacionesMoviles").hover(function(){
	$("#menuAplicacionesMoviles").show()
},function() {
	$("#menuAplicacionesMoviles").hide()
})

// -----------------

$("#LenguajesProgramacion").hover(function(){
	$("#menuLenguajesProgramacion").show()
	$("#menuDesarrolloWeb").hide()
	$("#menuAplicacionesMoviles").hide()
	$("#menuVideojuegos").hide()
	$("#menuMasOpciones").hide()
})

$("#menuLenguajesProgramacion").hover(function(){
	$("#menuLenguajesProgramacion").show()
},function() {
	$("#menuLenguajesProgramacion").hide()
})

// -----------------

$("#videojuegos").hover(function(){
	$("#menuVideojuegos").show()
	$("#menuDesarrolloWeb").hide()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
	$("#menuMasOpciones").hide()
})

$("#menuVideojuegos").hover(function(){
	$("#menuVideojuegos").show()
},function() {
	$("#menuVideojuegos").hide()
})

// -----------------

$("#masOpciones").hover(function(){
	$("#menuMasOpciones").show()
	$("#menuVideojuegos").hide()
	$("#menuDesarrolloWeb").hide()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
})

$("#menuMasOpciones").hover(function(){
	$("#menuMasOpciones").show()
},function() {
	$("#menuMasOpciones").hide()
})

// funcionamiento de filtros


// detalle de cursos

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