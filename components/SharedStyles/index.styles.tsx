import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
export const FlexContainer = styled.div`
  max-width: 800px;
  margin: 1rem 1rem 0 1rem
`;
export const Card = styled.div`
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
export const IngredientTooltip = styled.span`
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
export const BeerImageFrame = styled.div`
  position: relative;
  padding: 0 2rem;
   &:hover ${IngredientTooltip} {
    display: block;
  }
`;
export const Image = styled.img`
  height: 200px;
  object-fit: cover;
`;
export const BeerInfo = styled.div`
  flex: 1 1 auto;
  padding: 0 2rem;
`;
export const Title = styled.h1`
  margin-top: 0;
`;
export const TagLine = styled.h3`
  color: #d9a949;
`;
export const LoadMoreImages = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1em;
  color: #3b8ad0;
  svg {
    height: 10px;
  }
}`;
