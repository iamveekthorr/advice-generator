import { useEffect, useState } from 'react';
import getAdviceController from '../controller/fetchAdvice.controller';

const useAdvice = (): { adviceSlip: string; adviceId: number } => {
  const [adviceSlip, setAdviceSlip] = useState<string>('');
  const [adviceId, setAdviceId] = useState<number>(0);

  const resolvePromise = (): void => {
    getAdviceController().then((slip) => {
      setAdviceSlip(slip.advice);
      setAdviceId(slip.id);
    });
  };

  useEffect(resolvePromise, []);

  return { adviceSlip, adviceId };
};

export default useAdvice;
