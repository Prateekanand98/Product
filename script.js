let cart = {
    product1: { quantity: 0, price: 100 },
    product2: { quantity: 0, price: 200 },
    product3: { quantity: 0, price: 300 }
};

function updateCart() {
    let cartContents = document.getElementById('cart-contents');
    cartContents.innerHTML = '';
    let total = 0;
    for (let key in cart) {
        if (cart[key].quantity > 0) {
            cartContents.innerHTML += `<div>${key.replace('product', 'Product-')} × ${cart[key].quantity} × ${cart[key].price}</div>`;
            total += cart[key].quantity * cart[key].price;
        }
    }
    document.getElementById('total').innerText = total;
}

function increment(product) {
    cart[product].quantity++;
    document.getElementById(`${product}-quantity`).innerText = cart[product].quantity;
    updateCart();
}

function decrement(product) {
    if (cart[product].quantity > 0) {
        cart[product].quantity--;
        document.getElementById(`${product}-quantity`).innerText = cart[product].quantity;
        updateCart();
    }
}

updateCart();
