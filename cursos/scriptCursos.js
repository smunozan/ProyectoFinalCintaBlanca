$("#empezar").click(function(){
	$(window).scrollTop($('#main').offset().top);
})

// -----------------

$("#desarrolloWeb").hover(function(){
	$("#menuDesarrolloWeb").show()
	$("#menuAplicacionesMoviles").hide()
	$("#menuLenguajesProgramacion").hide()
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
})

$("#menuLenguajesProgramacion").hover(function(){
	$("#menuLenguajesProgramacion").show()
},function() {
	$("#menuLenguajesProgramacion").hide()
})

