import React, { useState, useEffect, createContext } from 'react';

import { KEYS } from 'constants/localStorage';

import { initialValues } from './initialValues';

const Context = createContext(initialValues);

const GlobalContext = ({ children }) => {
  const [globalContext, setGlobalContext] = useState(initialValues);

  useEffect(() => {
    sessionStorage.setItem(KEYS.context, JSON.stringify(globalContext));
  }, [globalContext]);

  return (
    <Context.Provider value={{ globalContext, setGlobalContext }}>{children}</Context.Provider>
  );
};

export { Context, GlobalContext };
