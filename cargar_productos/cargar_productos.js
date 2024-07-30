let cart = [];

// Esta función actualiza la cantidad de productos en el carrito
function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

// Esta función calcula el total del precio de los productos en el carrito
function updateCartTotal() {
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById('cartTotal').innerText = `Total: Q${total.toFixed(2)}`;
}

// Esta función muestra los productos en el carrito
function renderCartItems() {
    let cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    cart.forEach(product => {
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-name">${product.title}</div>
            <div class="cart-item-price">Q${product.price}</div>
        `;
        cartItemsContainer.appendChild(div);
    });
}

// Esta función agrega un producto al carrito utilizando su ID
function addToCart(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            cart.push(product);
            updateCartCount();
            updateCartTotal();
            renderCartItems();
        });
}

// Este evento muestra u oculta el contenedor del carrito cuando se hace clic en el botón del carrito
document.getElementById('cartButton').addEventListener('click', () => {
    let cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
});

// Esta función obtiene y muestra los productos de la tienda al cargar la página
async function fetchProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        let productContainer = document.getElementById('div_product_list');
        productContainer.innerHTML = '';

        products.forEach(product => {
            let div = document.createElement("div");
            div.className = "item_product";
            div.innerHTML = `
                <div class="box_img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product_details">
                    <span class="name">${product.title}</span>
                    <span class="price">Q${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Agregar al carrito</button>
                </div>
            `;
            productContainer.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Este evento ejecuta la función fetchProducts cuando el contenido del documento ha sido cargado
document.addEventListener('DOMContentLoaded', fetchProducts);
