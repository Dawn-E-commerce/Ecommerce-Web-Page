import instance from './apis';

export const getAll = async () => {
  try {
    const { data } = await instance.get('/products');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
