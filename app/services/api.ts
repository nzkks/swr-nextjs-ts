import { axiosInstance } from './fetcher';

export const createProduct = async (url: string, { arg }: { arg: { name: string } }) => {
  await axiosInstance.post(url, { name: arg.name });
};
