function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  ).then(responce => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    responce.json();
  });
}

export default { fetchCountries };
