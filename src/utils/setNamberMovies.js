export const renderNumberFilm = (window) => {
  if (window >= 769) {
    return 12;
  }
  if (window <= 768 && window >= 479) {
    return 8;
  }
  return 5;
}

export const clickMoreMovies = (window) => {
  if (window > 768) {
    return 3
  } else {
    return 2;
  }
}

export const filter = (numberFilmsMore, ilterMovies) => {
	ilterMovies.slice(0, numberFilmsMore).map((film) => {
		return film
	})
}
