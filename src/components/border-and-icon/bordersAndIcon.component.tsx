import { FC, useEffect, useState } from 'react';
import { ReactComponent as PauseIconDesktop } from '../../assets/pattern-divider-desktop.svg';
import { BorderAndIconContainer } from './borderAndIcon.styles';

import { ReactComponent as PauseIconMobile } from '../../assets/pattern-divider-mobile.svg';

const BorderAndIcon: FC = () => {
  const [match, setMatch] = useState<boolean>();
  const mediaQueryList = window.matchMedia('(min-width: 90em)');

  const doChange = (): void => setMatch(mediaQueryList.matches);
  useEffect(() => {
    mediaQueryList.addEventListener('change', doChange);

    return () => mediaQueryList.removeEventListener('change', doChange);
  });
  return (
    <BorderAndIconContainer>
      {match ? <PauseIconDesktop /> : <PauseIconMobile />}
    </BorderAndIconContainer>
  );
};

export default BorderAndIcon;
