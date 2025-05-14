import { useState, useEffect } from 'react'

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  actions: {
    setItem: (newValue: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];


const getValueStorage = (key: string): LocalStorageReturnValue => {
  return localStorage.getItem(key);
}

export const useLocalStorage: UseLocalStorage = (key: string) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(() => getValueStorage(key));
  
  useEffect(() => {
    if (!!value)
      localStorage.setItem(key, value)
    else
      localStorage.removeItem(key);
  }, [value])

  const setItem = (newValue: LocalStorageSetValue) => {
    setValue(newValue);
  }
  
  const removeItem = () => {
    setValue(null);
  }

  return [
    value,
    {
      setItem,
      removeItem
    }
  ];
}

