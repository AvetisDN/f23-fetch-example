import convertRating from "../utils/convertRating";
import stars from "./stars";
import brand from "./brand";

function product(prod) {
  return `
        <div class="product-card" id="product-${prod.id}">
          ${brand(prod.brand)}
          <img
            src="${prod.thumbnail}"
            alt="${prod.title}"
          />
          <div class="content">
            <h2>${prod.title}</h2>
            <div class="data">
              <div class="price">$${prod.price.toFixed(2)}</div>
              <div class="rating">
                <div class="rating-stars">
                  ${stars(prod.rating)}
                </div>
                <div class="rating-value">
                    ${convertRating(prod.rating)}
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}

export default product;
