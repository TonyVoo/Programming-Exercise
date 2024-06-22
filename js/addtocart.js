let cart = [];

        // Fetch cart data from localStorage or sessionStorage
        document.addEventListener('DOMContentLoaded', function () {
            cart = JSON.parse(localStorage.getItem('cart')) || [];
            displayCartItems();
            displayCustomerInfo();
        });

        function displayCartItems() {
            const itemsContainer = document.querySelector('.items');
            itemsContainer.innerHTML = '<h3>Items</h3>'; // Reset items container

            if (cart.length === 0) {
                itemsContainer.innerHTML += '<p>Your cart is empty.</p>';
                return;
            }

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <p>${item.name}</p>
                    <div class="quantity-control">
                        <button onclick="decreaseQuantity('${item.name}')">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity('${item.name}')">+</button>
                    </div>
                `;
                itemsContainer.appendChild(cartItem);
            });
        }

        function increaseQuantity(productName) {
            const product = cart.find(item => item.name === productName);
            product.quantity += 1;
            updateCart();
        }

        function decreaseQuantity(productName) {
            const product = cart.find(item => item.name === productName);
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                cart = cart.filter(item => item.name !== productName);
            }
            updateCart();
        }

        function updateCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
        }

        function displayCustomerInfo() {
            // For demo purposes, customer info is hardcoded
            const customerInfoContainer = document.querySelector('.customer-info');
            customerInfoContainer.innerHTML = `
                <p>Name: John Doe</p>
                <p>Email: john.doe@example.com</p>
                <p>Address: 123 Main St, Anytown, USA</p>
            `;
        }

        function checkout() {
            alert('Proceeding to checkout...');
            // Implement checkout process here
        }