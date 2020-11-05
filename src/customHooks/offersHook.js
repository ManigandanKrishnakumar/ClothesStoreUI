import {useState, useEffect} from 'react';
import fashionApi from '../api/FashionApiConfig';
import {OFFERS_ENDPOINT} from '../constants/end-points';

export default () => {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState('');

  const fetchOffers = async () => {
    try {
      const result = await fashionApi.get(OFFERS_ENDPOINT);
      setOffers(result.data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);
  return [offers, error];
};
