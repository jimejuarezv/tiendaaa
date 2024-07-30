import { cargarProductos } from "../cargar_productos/cargar_productos.js";
import { cargar_categorias } from "../cargar_categoria/Cargar_categorias.js";

// Selecciona el elemento con id "root" y establece su contenido HTML
let DOM = document.querySelector("#root");
DOM.innerHTML = `
    <header></header>
    <main class="body">
        <section id="div_product_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`;

let lista_productos;

// Obtiene los productos de la API y llama a la función cargarProductos con los datos obtenidos
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        lista_productos = data;

        // Llama a la función cargarProductos con la lista de productos obtenidos
        cargarProductos(lista_productos);
    });

// Carga las categorías
cargar_categorias();
