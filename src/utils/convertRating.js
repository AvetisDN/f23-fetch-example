function convertRating(rating) {
  rating = +rating;
  return Math.round(rating * 2) / 2;
}

export default convertRating;
