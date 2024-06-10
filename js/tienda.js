// Initialize shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add event listener to each "Add to cart" button
document.querySelectorAll('.btn-outline-dark').forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent the default button click behavior
        event.preventDefault();

        // Get the product details
        let card = this.closest('.card');
        let productId = card.getAttribute('data-product-id');
        let productName = card.querySelector('.fw-bolder').textContent;
        let productPrice = card.querySelector('.card-body').lastChild.textContent;

        // Add the product to the shopping cart
        cart.push({
            id: productId,
            name: productName,
            price: productPrice
        });

        // Store the shopping cart in local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});