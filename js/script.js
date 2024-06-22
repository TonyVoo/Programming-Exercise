let cartCount = 0;

function addToCart() {
    // Add product to cart logic
    cartCount++;
    updateCartIcon();
}

function updateCartIcon() {
    document.getElementById('cartCount').textContent = cartCount;
}

// Example function to add product to cart
function showQuantityControl(button) {
    addToCart();
    // Additional logic to show quantity control or update UI as needed
}

function showMoreProducts(button) {
    const productContainer = button.parentElement.querySelector('.product-listings');
    // Code to load more products or reveal hidden products
    // Example:
    productContainer.style.display = 'block'; // or any logic to display more products
    button.style.display = 'none'; // Hide the "Show more" button after displaying more products
}

// form.js

function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission to server
    
    // Simulate authentication (replace with actual authentication logic)
    let email = document.getElementById('email-username').value;
    let password = document.getElementById('password').value;
  
    // Check if email and password are correct (this is just an example)
    if (email === 'example@email.com' && password === 'password') {
      // Successful login
      alert('Login successful! Redirecting to homepage...');
      window.location.href = 'index.html'; // Redirect to homepage
    } else {
      // Failed login
      alert('Invalid email or password. Please try again.');
    }
  }

  // form.js

function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission to server
  
    // Simulate registration (replace with actual registration logic)
    let email = document.getElementById('email-username').value;
    let password = document.getElementById('password').value;
    let confirmedPassword = document.getElementById('confirmed-password').value;
  
    // Check if passwords match
    if (password !== confirmedPassword) {
      alert('Passwords do not match. Please re-enter.');
      return;
    }
  
    // Simulate successful registration (replace with actual logic)
    // For demonstration, assume registration is successful
    alert('Account created successfully! Redirecting to sign-in page.');
  
    // Redirect to sign-in page after successful registration
    window.location.href = 'sign-in.html';
  }

  // product.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation to homepage when clicking on Awazon logo
    const awazonLogo = document.querySelector('header h1 a');
    awazonLogo.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'index.html'; // Adjust the URL to your homepage
    });
  
    // Handle 'Buy Now' button click - simulate adding to cart and redirecting to cart page
    const buyNowButton = document.querySelector('.buy-now');
    buyNowButton.addEventListener('click', function() {
      addToCart();
      redirectToCart();
    });
  
    // Handle 'Add to Cart' button click - simulate adding to cart
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', function() {
      addToCart();
      alert('Product added to cart!');
    });
  
    function addToCart() {
      // Simulate adding the product to cart (replace with actual logic)
      let productName = document.querySelector('.right-column h1').textContent;
      let quantity = document.getElementById('quantity').value;
      let cartItem = {
        product: productName,
        quantity: quantity
      };
      // Here you can store `cartItem` in localStorage or send to backend
      console.log('Added to cart:', cartItem);
    }
  
    function redirectToCart() {
      // Simulate redirecting to cart page after 'Buy Now'
      alert('Redirecting to cart page...');
      // Replace 'cart.html' with your actual cart page URL
      window.location.href = 'cart.html';
    }
  });
  