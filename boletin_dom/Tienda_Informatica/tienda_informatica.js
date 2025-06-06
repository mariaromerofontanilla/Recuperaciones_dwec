const CATEGORIAS = [
	{ id: 1, nombre: "Ratones" },
	{ id: 2, nombre: "Teclados" },
	{ id: 3, nombre: "Monitores" }
];
const PRODUCTOS = [
	{ id: 1, categoria: 1, nombre: "Ratón Logitech G2023", precio:24.90, descripcion: "Tecnología LIGHTSYNC, un sensor para gaming y un diseño clásico con 6 botones", imagen: "logitech-g203.webp", caracteristicas: ["Ancho: 34mm", "Prof.: 116mm", "Alto: 42mm", "Peso: 85g"] },
	{ id: 2, categoria: 1, nombre: "Ratón MSI Clutch GM08",precio: 9.99, descripcion: "Con un preciso Sensor PAW-3519 óptico de hasta 3200 DPI", imagen: "msi-gm08.webp", caracteristicas: ["Ancho: 40mm", "Prof.: 128mm", "Alto: 40", "Peso: 92g"] },
	{ id: 3, categoria: 1, nombre: "Ratón Tempest MS300", precio: 15.23, descripcion: "Ratón gaming diseñado para ofrecer precisión y estilo a los gamers más exigentes", imagen: "tempest-ms300.webp", caracteristicas: ["Ancho: 41mm", "Prof.: 108mm", "Alto: 38", "Peso: 75g"] },
	{ id: 5, categoria: 2, nombre: "Teclado Corsair K55", precio: 72.19, descripcion: "Ilumine sus sesiones de juego con retroiluminación RGB de diez zonas", imagen: "teclado_corsair_k55.webp", caracteristicas: ["Color: Negro", "Iluminación: Sí"] },
	{ id: 6, categoria: 2, nombre: "Teclado Tempest K20", precio: 83.55, descripcion: "Un teclado con un diseño gaming exclusivo", imagen: "teclado_tempest_k20.webp", caracteristicas: ["Color: Blanco", "Tipo: Mecánico", "Layout: Español", "Peso: 450gr", "Nº teclas: 68"] },
	{ id: 7, categoria: 2, nombre: "Teclado Owlotech EMK500", precio: 34.99, descripcion: "Está diseñado para proporcionar una experiencia de uso ergonómica y comodísima", imagen: "teclado_owlotech.webp", caracteristicas: ["Color: Negro", "Tipo: Mecánico", "Peso: 112g"] },
	{ id: 8, categoria: 3, nombre: "Monitor LG 24GS50F", precio: 150.12, descripcion: "Monitor diseñado especialmente para gamers", imagen: "monitor_lg.webp", caracteristicas: ["Tipo HD: Full HD", "Pantalla táctil: No"] },
	{ id: 9, categoria: 3, nombre: "Monitor MSG G27", precio: 169.55, descripcion: "Equipado con un panel de 1920x1080, 250hz", imagen: "monitor_msi.webp", caracteristicas: ["Curvatura: 1500R", "Relación de aspecto: 16:9"] },

];

// Escribe aquí tu código

// Funcion para filtrar los productos por categoria
function filtrarProductosPorCategoria(categoriaId) {
	let productosFiltrados = [];
	for (let i = 0; i < PRODUCTOS.length; i++) {
		if (PRODUCTOS[i].categoria === categoriaId) {
			productosFiltrados.push(PRODUCTOS[i]);
		}
	}
	return productosFiltrados;
}

// Generar categorias en el fontload con window.onload
window.onload = iniciar;
function iniciar() {
	// Llamar a la funcion para mostrar las categorias en el select
	mostrarCategorias();
	// Llamar a la funcion para mostrar los productos en la tabla
	mostrarProductos(PRODUCTOS);

}

// window.addEventListener("load", function() {
// 	// Llamar a la funcion para mostrar las categorias en el select
// 	mostrarCategorias();
// 	// Llamar a la funcion para mostrar los productos en la tabla
// 	mostrarProductos(PRODUCTOS);
// });

// Funcion para mostrar las categorias en el select
function mostrarCategorias() {
	let txtCategorias = ""; // Variable para almacenar las opciones del select
	for (let i = 0; i < CATEGORIAS.length; i++) {
		txtCategorias += `<div class="col"><h1><span onclick="cargarProductosPorCategoria(${CATEGORIAS[i].id})" class="badge bg-info cursor-pointer">${CATEGORIAS[i].nombre}</span></h1></div>`;
	}

	document.getElementById("categorias").innerHTML = txtCategorias; // Limpiar el select antes de agregar las opciones
}

function cargarProductosPorCategoria(id) {
	let productos = filtrarProductosPorCategoria(id); // Filtrar los productos por categoria
	mostrarProductos(productos); // Mostrar los productos filtrados en la tabla
	// mostrarCaracteristicas(id); // Mostrar las caracteristicas del producto
}

// Funcion para mostrar los productos en la tabla
function mostrarProductos(productos) {
	let txtProductos = ""; // Variable para almacenar las filas de la tabla
	for (let i = 0; i < productos.length; i++) {
		txtProductos += `<div class="card" style="width: 18rem;">
              <img src="images/${productos[i].imagen}" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">${productos[i].nombre}</h5>
                <p class="card-text">${productos[i].descripcion}</p>
                <a href="#" onclick="mostrarCaracteristicas(${productos[i].id})" class="btn btn-primary">CARACTERISTICAS</a>
              </div>
            </div>`;
	}
	document.getElementById("productos").innerHTML = txtProductos; // Limpiar la tabla antes de agregar las filas
}

// Funcion para que al hacer click en una categoria se muestren los productos de esa categoria
function filtrarProductosPorID(id) {
	for(let i = 0; i < PRODUCTOS.length; i++) {
		if (PRODUCTOS[i].id === id) return PRODUCTOS[i];
	}
	return null;
}

// Funcion para mostrar las caracteristicas del producto
// Esta funcion se llama al hacer click en el boton de caracteristicas
function mostrarCaracteristicas(id) {
	// console.log("mostrarcaracteristicas:" + id);
	let producto = filtrarProductosPorID(id);
	let caracteristicasDiv = document.getElementById("caracteristicas");
	caracteristicasDiv.innerHTML = ""; // Limpiar el contenido previo
	for (let i = 0; i < producto.caracteristicas.length; i++) {
		let li=document.createElement("li");
		li.className="list-group-item d-flex justify-content-between lh-sm";
		li.innerHTML=`<h6 class="my-0">${producto.caracteristicas[i]}</h6>`;
		caracteristicasDiv.appendChild(li);
	}
}


/*
function mostrarCaracteristicas(id) {
	console.log("mostrarcaracteristicas:" + id);
	let productos = filtrarProductosPorCategoria(id);
	let caracteristicasDiv = document.getElementById("caracteristicas");
	caracteristicasDiv.innerHTML = ""; // Limpiar el contenido previo
	for (let i = 0; i < productos[0].caracteristicas.length; i++) {
		let li=document.createElement("li");
		li.className="list-group-item d-flex justify-content-between lh-sm";
		li.innerHTML=`<h6 class="my-0">${productos[0].caracteristicas[i]}</h6>`;
		caracteristicasDiv.appendChild(li);
	}
}
*/