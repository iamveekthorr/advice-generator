import styled from 'styled-components';

const CircleBG = styled.div`
  border-radius: 50%;
  background: hsl(150, 100%, 66%);
  position: absolute;
  bottom: -2rem;
  right: 50%;
  transform: translateX(50%);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  padding: 1rem;

  &:hover {
    box-shadow: 0px 0px 14px 15px hsla(150, 100%, 66%, 0.3);
    cursor: pointer;
  }
`;

export default CircleBG;
