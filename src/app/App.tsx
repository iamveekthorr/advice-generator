import { ReactElement, useEffect, useState } from 'react';
import BorderAndIcon from '../components/border-and-icon/bordersAndIcon.component';
import Card from '../components/card/card.component';
import Circle from '../components/circle/circle.component';
import { HeadingText } from '../components/heading-text/heading_text.styles';
import { Quote } from '../components/quotes/quotes.styles';
import getAdviceController from '../controller/fetchAdvice.controller';
import useAdvice from '../hooks/useAdvice.hook';

function App(): ReactElement {
  const { adviceSlip, adviceId } = useAdvice();
  const [advice, setAdvice] = useState<string>();
  const [id, setId] = useState<number>();

  const update = (): void => {
    getAdviceController().then((slip) => {
      setAdvice(slip.advice);
      setId(slip.id);
    });
  };

  useEffect(() => {
    setAdvice(adviceSlip);
    setId(adviceId);
  }, [adviceSlip, adviceId]);

  return (
    <Card>
      <div>
        <HeadingText> advice #{id}</HeadingText>
        <Quote>&ldquo;{advice}&rdquo;</Quote>
      </div>
      <BorderAndIcon />
      <Circle handleClick={update} />
    </Card>
  );
}

export default App;
