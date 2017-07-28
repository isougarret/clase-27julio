var prod_venta = []
var prod_carro = []

var producto = function(nombre,precio,link){
	this.nombre = nombre;
	this.precio = precio;
	this.link = link;

	prod_venta.push(this)

	this.agregar = function(){
		prod_carro.push(this)
	}

}

// IMPORTAR PRODUCTOS DESDE HTML
var productos = document.getElementsByClassName('product')


for (i=0 ; i < productos.length ; i++) {
	hijos = productos[i].children
	new producto(hijos[0].innerText,hijos[1].innerText,hijos[2].innerText)
}



// AGREGAR AL CARRITO DE COMPRAS
function crearElemento(elemento){
	var elem = document.createElement('li')
	var text = document.createTextNode(elemento)
	elem.appendChild(text)
	return elem
}

function mostrar(producto){
	var lista = document.createElement('ul')
	var elem1 = crearElemento(producto.nombre)
	var elem2 = crearElemento(producto.precio)
	lista.appendChild(elem1)
	lista.appendChild(elem2)
	carro = document.getElementById('carro')

	carro.after(lista)
	
}

$('#button1').on('click',function(){
	var index = 0
	prod_venta[index].agregar()
	mostrar(prod_venta[index])
})

$('#button2').on('click',function(){
	var index = 1
	prod_venta[index].agregar()
	mostrar(prod_venta[index])
})

$('#button3').on('click',function(){
	var index = 2
	prod_venta[index].agregar()
	mostrar(prod_venta[index])
})

$('#button4').on('click',function(){
	var index = 3
	prod_venta[index].agregar()
	mostrar(prod_venta[index])
})

$('#button5').on('click',function(){
	var index = 4
	prod_venta[index].agregar()
	mostrar(prod_venta[index])
})

$('#button6').on('click',function(){
	var index = 5
	prod_venta[index].agregar()
	mostrar(prod_venta[index])
})

