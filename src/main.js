import product from "./components/product";
import counter from "./components/counter";
import "./style.css";

const productContainer = document.querySelector("#products-container");
const productCounter = document.querySelector("#products-title > span");

let limit = 12;
let skip = 12;
let total = 0;

function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      total = data.total;
      renderCounter();
      renderProducts(data.products);
    });
}

function renderCounter() {
  productCounter.textContent = counter(total);
}

function renderProducts(products) {
  productContainer.innerHTML = products.map((prod) => product(prod)).join("");
}

fetchData(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
