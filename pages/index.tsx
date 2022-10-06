import React, { FormEvent, memo, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import DownSVG from '../components/Icons/DownSVG';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
const FlexContainer = styled.div`
  max-width: 800px;
  margin: 1rem 1rem 0 1rem
`;
const Card = styled.div`
  display: inline-flex;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  min-width: 300px;
  text-decoration: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  :focus,
  :active {
    background: #f2f8fd;
  }
`
const IngredientTooltip = styled.span`
  display: none;
  position: absolute;
  bottom: 210px;
  left: 0;
  right: 0;
  background: #333;
  color: #fff;
  width: 150px;
  text-align: center;
  padding: 10px;
`;
const BeerImageFrame = styled.div`
  position: relative;
  padding: 0 2rem;
   &:hover ${IngredientTooltip} {
    display: block;
  }
`;
const Image = styled.img`
  height: 200px;
  object-fit: cover;
`;
const BeerInfo = styled.div`
  flex: 1 1 auto;
  padding: 0 2rem;
`;
const Title = styled.h1`
  margin-top: 0;
`;
const TagLine = styled.h3`
  color: #d9a949;
`;
const LoadMoreImages = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1em;
  color: #3b8ad0;
  svg {
    height: 10px;
  }
}`;
const getBeers = async (fetchedNumber: number) =>
  await axios
    .get(`https://api.punkapi.com/v2/beers?page=1&per_page=${fetchedNumber}`)
    .then((res) => res.data)
    .catch((error) => error);
const index = memo(() => {
  const [fetchedNumber, setBeerFetchedNumber] = useState(3);
  const { data: beerList = [], isLoading } = useQuery(
    ['get-beers', fetchedNumber],
    () => getBeers(fetchedNumber)
  );
  const handleLoadMoreImage = (e: FormEvent) => {
    e.preventDefault();
    const incremented = fetchedNumber + 2;
    setBeerFetchedNumber(incremented);
  };
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
const RenderBeerList = ({
  beerList,
  handleLoadMoreImage,
  isLoading,
}: {
  beerList: object[];
  handleLoadMoreImage: (e: FormEvent) => void;
  isLoading: Boolean;
}) => {
  const [beerListCopy, setBeerListCopy] = useState([]);
  useEffect(() => {
    if (beerList.length) setBeerListCopy(beerList);
  }, [beerList]);
  const loadButton = useMemo(
    () =>
      beerListCopy.length <= 79 && isLoading ? (
        <span>loading...</span>
      ) : (
        <a onClick={handleLoadMoreImage} href="">
          Load more <DownSVG />
        </a>
      ),
    [handleLoadMoreImage, beerListCopy, isLoading]
  );
  return (
    <Main>
      <FlexContainer>
        <h2>Beers</h2>
        {beerListCopy.map(
          ({ tagline, name, description, image_url, ingredients }) => (
            <Card key={name}>
              <BeerImageFrame>
                <Image src={image_url} alt={name} />
                <IngredientTooltip>
                  <strong>Ingredients:</strong>{' '}
                  {Object.keys(ingredients).map(
                    (v, i) =>
                      `${v}${
                        Object.keys(ingredients).length - 1 !== i ? ', ' : ''
                      }`
                  )}
                </IngredientTooltip>
              </BeerImageFrame>
              <BeerInfo>
                <Title>{name}</Title>
                <TagLine>{tagline}</TagLine>
                <p>{description}</p>
              </BeerInfo>
            </Card>
          )
        )}
        <LoadMoreImages>{loadButton}</LoadMoreImages>
      </FlexContainer>
    </Main>
  );
};
export default index;
