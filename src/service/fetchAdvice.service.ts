import axios, { AxiosResponse } from 'axios';
import catchAsync from '../common/asyncHandler.common';
import IAdviceDTO from '../dto/advice.dto';

const getAdviceService = catchAsync(async (): Promise<IAdviceDTO> => {
  const { data }: AxiosResponse = await axios.get(
    'https://api.adviceslip.com/advice'
  );
  return data.slip as IAdviceDTO;
});

export default getAdviceService;
