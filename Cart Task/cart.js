
function calculate () {
const productName = document.getElementById('product-name').value;
const price = Number(document.getElementById('price').value);
const quantity = Number(document.getElementById('quantity').value);
const total = price*quantity;
const tbody = document.getElementById('products');

tbody.innerHTML += `<tr><td>${productName}</td><td>$${price}</td><td>${quantity}</td><td>$${total}</td><td><button class="btn btn-primary">Remove</button></td></tr>`;
}