import product from "./components/product";
import counter from "./components/counter";
import "./style.css";
import pagination from "./components/pagination";

const productContainer = document.querySelector("#products-container");
const productCounter = document.querySelector("#products-title > span");
const loadMoreButton = document.querySelector("#load-more");
const scrollPoint = document.querySelector("#scroll-point");
const selectLimit = document.querySelector("#select-limit");
const paginationContainer = document.querySelector("#pagination");

let limit = 12;
let total = 0;
let current = 1;
let skip = limit * (current - 1);
let freshRender = true;

function fetchData() {
  const url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      total = data.total;
      renderCounter();
      renderProducts(data.products);
      renderPagination();
      freshRender = false;
    })
    .finally(() => {
      loadMoreButton.classList.remove("loading");
      if (skip + limit >= total) {
        loadMoreButton.style.display = "none";
      }
      if (skip > 0) {
        scrollPoint.scrollIntoView(false);
      }
    });
}

function renderCounter() {
  productCounter.textContent = counter(total);
}

function renderProducts(products) {
  if (freshRender) {
    productContainer.innerHTML = "";
  }
  productContainer.innerHTML += products.map((prod) => product(prod)).join("");
}

function renderPagination() {
  paginationContainer.innerHTML = "";
  paginationContainer.append(pagination(total, limit, current, changePage));
}

function changePage(page) {
  current = page;
  skip = limit * (current - 1);
  freshRender = true;
  fetchData();
  renderPagination();
}

fetchData();

loadMoreButton.addEventListener("click", (event) => {
  event.currentTarget.classList.add("loading");
  skip += limit;
  fetchData();
});

selectLimit.addEventListener("change", (event) => {
  freshRender = true;
  current = 1;
  limit = +event.currentTarget.value;
  skip = 0;
  fetchData();
});
