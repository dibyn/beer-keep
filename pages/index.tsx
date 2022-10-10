import React, { FormEvent, memo, useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBeers } from '../api/index.api';
import RenderBeerList from '../components/pageComponents/RenderBeerList';

const index = memo(() => {
  const [fetchedNumber, setBeerFetchedNumber] = useState(7);
  const { data: beerList = [], isLoading } = useQuery(
    ['get-beers', fetchedNumber],
    () => getBeers(fetchedNumber)
  );
  const handleLoadMoreImage = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const incremented = fetchedNumber + 3;
      setBeerFetchedNumber(incremented);
    },
    [fetchedNumber]
  );
  return (
    <>
      <RenderBeerList
        beerList={beerList}
        handleLoadMoreImage={handleLoadMoreImage}
        isLoading={isLoading}
      />
    </>
  );
});
export default index;
