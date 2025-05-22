// custom user hook useFetch

import { useEffect, useState } from 'react'


export type RefetchOptions = {
  params: {
    _limit: number;
  };
}

export type RefetchCallback = (opt: RefetchOptions) => Promise<void>;

export type UseFetchResponse = {
  data: any;
  isLoading: boolean;
  error: string;
  refetch: RefetchCallback;
}

const DEFAULT_OPTIONS: RefetchOptions = {
  params: {
    _limit: 3,
  }
};


export const useFetch = (url: string): UseFetchResponse => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const refetch: RefetchCallback = async (options: RefetchOptions) => {
    let localError = 'Unknown error';
    
    try {
      setIsLoading(true);

      const urlParams = !!options.params._limit ? url + `?limit=${options.params._limit}` : url;
      const response = await fetch(urlParams);
      // console.log('response:', response);
      if (!response.ok) {
        localError = `Bad response. Status: ${response.status}`;
        return;
      }
      
      const newData = await response.json();
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
    refetch(DEFAULT_OPTIONS);
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