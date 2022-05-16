import IAdviceDTO from '../dto/advice.dto';
import getAdviceService from '../service/fetchAdvice.service';

const getAdviceController = (): Promise<IAdviceDTO> => getAdviceService();

export default getAdviceController;
