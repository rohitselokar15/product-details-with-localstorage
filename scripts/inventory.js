
// pro variable will display all the products.
const pro = document.getElementById('all_products');

// Function to remove a product from the list of products.
function removeProduct(index) {

    // Get existing products from the localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // splice method used to remove the one element from the array.
    products.splice(index, 1);

    // after removing the product Save the updated array back to localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // display the product
    displayProducts();
}

// display products stored in localStorage
function displayProducts() {

    // Get existing products from the localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // remove the previous content
    pro.innerHTML = '';

    // Loop through each product and display it
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>Type: ${product.type}</p>
            <p>Description: ${product.desc}</p>
            <p>Price: ${product.price}</p>
            <p>Image: ${product.image}</p>
            <button id="remove_product" onclick="removeProduct(${index})">Remove</button>
            <hr>
        `;
        pro.appendChild(productDiv);
    });
}

displayProducts();