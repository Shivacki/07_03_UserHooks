// custom user hook useFetch()

import { useEffect, useState } from 'react'


export type RefetchOptions = {
  params: {
    _limit: number;
  };
}

export type RefetchCallback = (opt: RefetchOptions) => Promise<void>;

export type UseFetchRes = {
  data: any;
  isLoading: boolean;
  error: string;
  refetch: RefetchCallback;
}


export const useFetch = (url: string): UseFetchRes => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const refetch: RefetchCallback = async (opt: RefetchOptions) => {
    let localError = 'Unknown error';
    
    try {
      setIsLoading(true);

      const response = await fetch(url);
      // console.log('response:', response);
      if (!response.ok) {
        localError = `Bad response. Status: ${response.status}`;
        return;
      }
      
      let newData = null;
      const rawData = await response.json();
      // console.log('rawData:', rawData);
      if (Array.isArray(rawData) && !!opt.params._limit) {
        // Ограничиваем кол-во эл-ов рез. массива по заданным опциям
        newData = rawData.slice(0, opt.params._limit);
      } else
        newData = rawData;

      localError = '';
      setData(newData);
    } catch(err) {
      if (err instanceof Error) {
        // console.log('error:', err.message);
        localError = err.message;
      }
    } finally {
      if (!!localError) {
        setError(localError);
        setData(null);
      }
      setIsLoading(false);
    }
  }

  useEffect(()=> {
    const opt: RefetchOptions = {
      params: {
        _limit: 3,
      }
    };

    refetch(opt);
  }, [url])
  

  return (
    {
      data,
      isLoading,
      error,
      refetch,
    }
  );
}