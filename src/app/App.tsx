import { ReactElement, useEffect, useState } from 'react';
import Card from '../components/card/card.component';
import Circle from '../components/circle/circle.component';
import useAdvice from '../hooks/useAdvice.hook';

function App(): ReactElement {
  const [advice, setAdvice] = useState<string>();
  const [id, setId] = useState<number>();
  const { adviceSlip, adviceId } = useAdvice();

  useEffect(() => {
    setAdvice(adviceSlip);
    setId(adviceId);
  }, [adviceSlip, adviceId]);

  return (
    <Card>
      <div>
        <p> {id}</p>
        <p>{advice}</p>
      </div>
      <Circle
        handleClick={() => {
          setAdvice(adviceSlip);
          setId(adviceId);
          console.log(advice, id);
        }}
      />
    </Card>
  );
}

export default App;
