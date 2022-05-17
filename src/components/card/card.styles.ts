import styled from 'styled-components';

const CardBG = styled.div`
  background-color: hsl(217, 19%, 24%);
  color: hsl(193, 38%, 86%);
  position: relative;
  height: auto;
  border-radius: 1rem;
  padding: 3rem;
  width: 30rem;

  @media only screen and (min-width: 90em) {
    padding: 5rem;
    width: 60rem;
  }
`;

export default CardBG;
