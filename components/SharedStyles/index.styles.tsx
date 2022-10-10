import styled from 'styled-components';

export const Main = styled.main`
  max-width: 100%;
  min-width: 360px;
}
`;
export const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 2rem 1rem 2rem 2rem;
  @media (max-width: 428px) {
    margin: 1rem;
  }
`;
export const Card = styled.div`
  display: inline-flex;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 99%;
  min-width: 340px;
  text-decoration: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  :focus,
  :active {
    background: #f2f8fd;
  }
  @media (max-width: 428px) {
    padding: 1rem;
  }
`
export const IngredientTooltip = styled.span`
  display: none;
  position: absolute;
  bottom: 210px;
  left: 0;
  right: 0;
  background-color: #333;
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
  height: 100%;
  @media (max-width: 428px) {
    padding: 0;
  }
`;
export const Image = styled.img`
  height: 165px;
  object-fit: cover;
  @media (max-width: 428px) {
    height: 100px;
  }
`;
export const BeerInfo = styled.div`
  flex: 1 1 auto;
  padding: 0 2rem;
  @media (max-width: 428px) {
    padding: 0 1rem;
  }
`;
export const Title = styled.h1`
  margin-top: 0;
  @media (max-width: 428px) {
    font-size: 16px;
  }
`;
export const TagLine = styled.h3`
  color: #d9a949;
  @media (max-width: 428px) {
    font-size: 12px;
  }
`;
export const LoadMoreImages = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1rem;
  color: #3b8ad0;
  svg {
    height: 10px;
  }
`;
export const HeadTitle = styled.h2`
  margin: 0 0 2rem 0;
  width: 99%;
`
export const Description = styled.p`
  font-size: 1rem;
  color: inherit;
  font-family: inherit;
  @media (max-width: 428px) {
    font-size: 10px;
  }
`
