
import axios from 'axios'

export const getBeers = async (fetchedNumber: number) =>
  await axios
    .get(`https://api.punkapi.com/v2/beers?page=1&per_page=${fetchedNumber}`)
    .then((res) => res.data)
    .catch((error) => error);
