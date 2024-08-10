import convertRating from "../utils/convertRating";

function stars(rating) {
  rating = +rating;
  const STAR_FULL = '<i class="fa-solid fa-star"></i>';
  const STAR_HALF = '<i class="fa-regular fa-star-half-stroke"></i>';
  const STAR_EMPTY = '<i class="fa-regular fa-star"></i>';
  const MAX_RATING = 5;
  let code = "";

  const convertedRating = convertRating(rating);

  for (let i = 0; i < Math.floor(convertedRating); i++) {
    code += STAR_FULL;
  }

  if (convertedRating !== Math.trunc(convertedRating)) {
    code += STAR_HALF;
  }

  for (let i = 0; i < MAX_RATING - Math.ceil(convertedRating); i++) {
    code += STAR_EMPTY;
  }

  return code;
}

export default stars;
