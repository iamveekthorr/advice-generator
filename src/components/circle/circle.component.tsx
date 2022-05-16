import { FC } from 'react';
import CircleBG from './circle.styles';

import { ReactComponent as Icon } from '../../assets/icon-dice.svg';

interface ICircleProps {
  handleClick: () => void;
}

const Circle: FC<ICircleProps> = ({ handleClick }) => (
  <CircleBG onClick={handleClick}>
    <Icon />
  </CircleBG>
);

export default Circle;
