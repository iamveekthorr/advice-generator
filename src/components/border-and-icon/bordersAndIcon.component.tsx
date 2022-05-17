import { FC, useCallback, useEffect, useState } from 'react';
import { ReactComponent as PauseIconDesktop } from '../../assets/pattern-divider-desktop.svg';
import { BorderAndIconContainer } from './borderAndIcon.styles';

import { ReactComponent as PauseIconMobile } from '../../assets/pattern-divider-mobile.svg';

const BorderAndIcon: FC = () => {
  const [match, setMatch] = useState<boolean>();
  const mediaQueryList = window.matchMedia('(min-width: 90em)');

  const doChange = useCallback(
    () => setMatch(mediaQueryList.matches),
    [mediaQueryList.matches]
  );

  useEffect(() => {
    setMatch(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', doChange);

    return () => mediaQueryList.removeEventListener('change', doChange);
  }, [mediaQueryList, doChange]);

  return (
    <BorderAndIconContainer>
      {match ? <PauseIconDesktop /> : <PauseIconMobile />}
    </BorderAndIconContainer>
  );
};

export default BorderAndIcon;
