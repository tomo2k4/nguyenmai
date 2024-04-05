// script.js
let cart = [];
let totalPrice = 0;

function toggleCart() {
    let cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'block' ? 'none' : 'block';
}

function addToCart(productId, price) {
    cart.push({ id: productId, price: price });
    totalPrice += price;
    updateCartUI();
}

function removeFromCart(productId, price) {
    let index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        totalPrice -= price;
        updateCartUI();
    }
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCartUI();
}

function checkout() {
    alert('Cảm ơn bạn đã mua hàng! Tổng tiền: ' + totalPrice + ' đ');
    clearCart();
}

function updateCartUI() {
    let cartCount = document.getElementById('cartCount');
    let cartItems = document.getElementById('cartItems');
    let total = document.getElementById('totalPrice');

    cartCount.innerText = cart.length;
    total.innerText = totalPrice;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `Sản phẩm ${item.id} - ${item.price} đ`;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa';
        removeButton.onclick = function() {
            removeFromCart(item.id, item.price);
        };
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
}

