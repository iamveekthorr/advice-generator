const catchAsync = (fn: any) => () => {
  return Promise.resolve(fn().catch((err: any) => console.log(err)));
};

export default catchAsync;
