import { FormEvent, useEffect, useMemo, useState } from 'react';
import DownSVG from '../Icons/DownSVG';
import {
  BeerImageFrame,
  BeerInfo,
  Card,
  FlexContainer,
  Image,
  IngredientTooltip,
  LoadMoreImages,
  Main,
  TagLine,
  Title,
} from '../SharedStyles/index.styles';

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
export default RenderBeerList;
