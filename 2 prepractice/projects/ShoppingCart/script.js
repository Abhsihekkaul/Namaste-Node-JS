const cartItems = [
    {  name: "eggs", price: 49.99 },
    {  name: "milk", price: 25.50 },
    { name: "bread", price: 30.00 },
    {  name: "butter", price: 89.99 },
    { name: "cheese", price: 120.00 }
];

const itemsList = document.querySelector('.cart-items');
const cart = document.querySelector('.cart');
const totalAmount = document.querySelector('.total-amount');

// Initialize total amount and cart items
let total = 0;
let cartContent = {};  // This will hold cart items with quantity

// Dynamically populate items
cartItems.forEach((e) => {
    const element = document.createElement('div');
    element.className = 'items';
    element.innerHTML = `
        <p class="Item-Name"> ${e.name}</p>
        <p class="Item-Price">$${e.price.toFixed(2)}</p>
        <button class="Add-to-cart">Add to cart</button>
    `;
    itemsList.appendChild(element);
});

// Add items to the cart
itemsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const parentElement = e.target.parentElement;
        const itemName = parentElement.querySelector('.Item-Name').textContent;
        const itemPriceText = parentElement.querySelector('.Item-Price').textContent;
        const itemPrice = parseFloat(itemPriceText.replace('$', ''));

        // If item already exists in the cart, increase quantity, else add to cart
        if (cartContent[itemName]) {
            cartContent[itemName].quantity++;
        } else {
            cartContent[itemName] = {
                price: itemPrice,
                quantity: 1
            };
        }

        // Update total amount
        total += itemPrice;
        totalAmount.textContent = `$${total.toFixed(2)}`;

        // Update cart UI
        updateCartUI();
    }
});

// Delete items from the cart
cart.addEventListener('click', (e) => {
    if (e.target.classList.contains('Delete-from-cart')) {
        const parentElement = e.target.parentElement;
        const itemName = parentElement.querySelector('.Item-Name').textContent;
        const itemPriceText = parentElement.querySelector('.Item-Price').textContent;
        const itemPrice = parseFloat(itemPriceText.replace('$', ''));

        // Subtract price from total
        total -= itemPrice;
        totalAmount.textContent = `$${total.toFixed(2)}`;

        // Decrease quantity or remove item from cartContent
        if (cartContent[itemName].quantity > 1) {
            cartContent[itemName].quantity--;
        } else {
            delete cartContent[itemName];
        }

        // Update cart UI
        updateCartUI();
    }
});

// Function to update the cart UI
function updateCartUI() {
    // Clear the cart to re-render it
    cart.innerHTML = '';

    // Loop through cartContent to display updated cart items with quantity
    for (const itemName in cartContent) {
        const cartItem = document.createElement('div');
        cartItem.className = 'Selected-item';
        cartItem.innerHTML = `
            <p class="Item-Name">${itemName}</p>
            <p class="Item-Price">$${cartContent[itemName].price.toFixed(2)}</p>
            <p class="Item-Quantity">Quantity: ${cartContent[itemName].quantity}</p>
            <button class="Delete-from-cart">Delete</button>
        `;
        cart.appendChild(cartItem);
    }
}
