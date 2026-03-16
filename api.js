//fakestoreapi.com/products

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//   asynchronous function

const container = document.querySelector("#container");
const getProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    const cheapProduct = data.products.filter((x) => x.price < 10);
    cheapProduct.forEach((product) => {
      const productEl = document.createElement("div");
      productEl.classList = "product-card";
      //  or  productEl.classList.add("product-card")
      productEl.innerHTML = `<img src="${product.thumbnail}" alt = "product-images"/>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <strong>${"$" + product.price}</strong>
            <button>Add to Cart</button>
               <h5>${product.category}</h5>    `;

      container.appendChild(productEl);
    });
  } catch (error) {
    console.log("error", error);
  }
};

getProduct();
