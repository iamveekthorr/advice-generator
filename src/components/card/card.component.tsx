import { FC, ReactNode } from 'react';
import CardBG from './card.styles';

interface ICardProps {
  children: ReactNode;
}

const Card: FC<ICardProps> = ({ children }) => <CardBG>{children}</CardBG>;

export default Card;
