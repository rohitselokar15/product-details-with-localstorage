//store the products array in localstorage as "products"

// data to stored in local Storage

document.getElementById('add_product').addEventListener('click', function () {
    // Get values from the form
    const type = document.getElementById('type').value;
    const desc = document.getElementById('desc').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    // Create product object
    const product = {
        type: type,
        desc: desc,
        price: price,
        image: image
    };

    // get the existing products from the localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // this push method used to add product object to end of the products array.
    products.push(product);

    //Save the updated array back to localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // clear all the field and resets them to the default values.
    document.getElementById('products').reset();
});