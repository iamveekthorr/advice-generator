import { FC } from 'react';
import { ReactComponent as PauseIconDesktop } from '../../assets/pattern-divider-desktop.svg';
import { BorderAndIconContainer } from './borderAndIcon.styles';

import { ReactComponent as PauseIconMobile } from '../../assets/pattern-divider-mobile.svg';

const BorderAndIcon: FC = () => {
  return (
    <BorderAndIconContainer>
      {window.matchMedia('(min-width: 90em)') ? (
        <PauseIconDesktop />
      ) : (
        <PauseIconMobile />
      )}
    </BorderAndIconContainer>
  );
};

export default BorderAndIcon;
