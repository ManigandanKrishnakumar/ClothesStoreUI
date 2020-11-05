import {useState, useEffect} from 'react';
import fashionApi from '../api/FashionApiConfig';
import {POPULAR_PRODUCTS} from '../constants/end-points';

export default (catagory) => {
  const [popularProducts, setpopularProducts] = useState([]);
  const [error, setError] = useState('');

  const fetchPopularProducts = async (url) => {
    console.log('FETCHING POPULAR PRODUCTS');
    try {
      const result = await fashionApi.get(url);
      console.log(result.data.length);
      setpopularProducts(result.data);
    } catch (err) {
      console.log(err);
      setError('Oops ! Something went wrong please try again later');
    }
  };
  useEffect(() => {
    fetchPopularProducts(POPULAR_PRODUCTS[catagory]);
  }, [catagory]);
  return [fetchPopularProducts, popularProducts, error];
};
