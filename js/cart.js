// Single Responsibility Principle



const getSubTotal = () => {
  return products.map((p) => p.price * p.quantity).reduce((a, t) => a + t);
}

const getShipping = () => {
  return products.length * 10;
}

const getTotal = () => {
  return getSubTotal() + getShipping();
}

const decQuantity = (i) => {
  if (products[i].quantity > 1) products[i].quantity--;
  localStorage.setItem('products', JSON.stringify(products));
  renderHTML();
}

const incQuantity = (i) => {
  products[i].quantity++;
  localStorage.setItem("products", JSON.stringify(products));
  renderHTML();
}

const remove = (i) => {
  products.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderHTML();
}

const renderHTML = () => {
  // clear rows of tobody
  document.getElementById("products").innerHTML = "";

  // create rows of products in tbody
  products.forEach((p, i) => {
    document.getElementById("products").innerHTML += getProductHTMLRow(p, i);
  });

  // calculate the sub-total, shipping and total and render it
  document.getElementById("sub-total").innerHTML = `$${getSubTotal()}`;
  document.getElementById("shipping").innerHTML = `$${getShipping()}`;
  document.getElementById("total").innerHTML = `$${getTotal()}`;
};

const getProductHTMLRow = (p, i) => {
  return `
  <tr>
    <td class="align-middle"><img src="img/${p.productName}.jpg" alt="" style="width: 50px;"> ${p.productName}</td>
    <td class="align-middle">$${p.price}</td>
    <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
            <div class="input-group-btn">
                <button type="button" class="btn btn-sm btn-primary btn-minus" onclick="decQuantity(${i})">
                <i class="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${p.quantity}">
            <div class="input-group-btn">
                <button type="button" class="btn btn-sm btn-primary btn-plus" onclick="incQuantity(${i})">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td class="align-middle">$${p.price * p.quantity}</td>
    <td class="align-middle"><button class="btn btn-sm btn-danger" type="button" onclick="remove(${i})"><i class="fa fa-times"></i></button></td>
</tr>`;
};


const products = JSON.parse(localStorage.getItem("products") || "[]");
renderHTML();
