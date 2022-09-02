export const regexUrl =
  /^[a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;

export const BASE_URL =`${window.location.protocol}${
		process.env.REACT_APP_API_URL || "//localhost:3000"
	}`;
