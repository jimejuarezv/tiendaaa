// Función asincrónica para obtener las categorías de productos
async function fetchCategories() {
    try {
        // Realiza una solicitud a la API para obtener las categorías
        let response = await fetch('https://fakestoreapi.com/products/categories');
        // Convierte la respuesta en un formato JSON
        let categories = await response.json();
        // Obtiene el contenedor de categorías en el HTML
        let categoriesContainer = document.getElementById('categories');
        // Limpia el contenedor de categorías (por si ya había algo)
        categoriesContainer.innerHTML = '';

        // Recorre cada categoría y crea un botón para cada una
        categories.forEach(category => {
            let button = document.createElement("button");
            button.className = "category_btn"; // Asigna una clase al botón
            button.dataset.category = category; // Guarda el nombre de la categoría en un atributo de datos
            button.innerText = category; // Establece el texto del botón como el nombre de la categoría
            // Agrega un evento al botón para filtrar productos por categoría cuando se haga clic
            button.addEventListener('click', () => filterProductsByCategory(category));
            // Añade el botón al contenedor de categorías
            categoriesContainer.appendChild(button);
        });
    } catch (error) {
        // Muestra un error en la consola si ocurre algún problema al obtener las categorías
        console.error('Error fetching categories:', error);
    }
}

// Función asincrónica para filtrar productos por categoría
async function filterProductsByCategory(category) {
    try {
        // Realiza una solicitud a la API para obtener productos de una categoría específica
        let response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        // Convierte la respuesta en un formato JSON
        let products = await response.json();
        // Obtiene el contenedor de productos en el HTML
        let productContainer = document.getElementById('div_product_list');
        // Limpia el contenedor de productos (por si ya había algo)
        productContainer.innerHTML = '';

        // Recorre cada producto y crea un elemento para cada uno
        products.forEach(product => {
            let div = document.createElement("div");
            div.className = "item_product"; // Asigna una clase al contenedor del producto
            // Añade la estructura HTML del producto (imagen, detalles y botón de agregar al carrito)
            div.innerHTML = `
                <div class="box_img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product_details">
                    <span class="name">${product.title}</span>
                    <span class="price">Q${product.price}</span>
                    <button class="add-to-cart-btn" onclick="Agregar al carrito(${product.id})">Agregar al carrito</button>
                </div>
            `;
            // Añade el producto al contenedor de productos
            productContainer.appendChild(div);
        });
    } catch (error) {
        // Muestra un error en la consola si ocurre algún problema al filtrar los productos por categoría
        console.error('Error filtering products by category:', error);
    }
}

// Ejecuta la función para obtener categorías cuando el contenido de la página se haya cargado
document.addEventListener('DOMContentLoaded', fetchCategories);
