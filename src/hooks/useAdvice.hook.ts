import { useEffect, useState } from 'react';
import getAdviceController from '../controller/fetchAdvice.controller';

const useAdvice = (): { adviceSlip: string; adviceId: number } => {
  const [adviceSlip, setAdviceSlip] = useState<string>('');
  const [adviceId, setAdviceId] = useState<number>(0);

  useEffect(() => {
    const resolvePromise = async (): Promise<void> => {
      const { advice, id } = await getAdviceController();
      setAdviceSlip(advice);
      setAdviceId(id);
    };

    resolvePromise();
  });

  return { adviceSlip, adviceId };
};

export default useAdvice;
