function fetchBreeds(BASE_URL, API_KEY) {
  return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    }
    return response.json();
  });
}

function fetchCatByBreed(BASE_URL, breedId, API_KEY) {
  const headers = {
    'x-api-key': API_KEY,
  };
  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`, {
    headers,
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };