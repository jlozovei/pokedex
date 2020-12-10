import React, { useState, useReducer, useEffect } from 'react';

import { initialValues } from './initialValues';

const ContextState = React.createContext();
const ContextDispatch = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'currentPokemon': {
      return {
        ...state,
        currentPokemon: action.value
      };
    }
    case 'species': {
      return {
        ...state,
        currentPokemon: {
          ...state.currentPokemon,
          species_info: action.value
        }
      };
    }
    case 'firstTwelve': {
      return {
        ...state,
        firstTwelve: action.value
      };
    }
    case 'generations': {
      return {
        ...state,
        generations: action.value
      };
    }
    case 'currentGeneration': {
      return {
        ...state,
        currentGeneration: action.value
      };
    }
    case 'clear': {
      return {
        ...state,
        currentPokemon: {},
        currentGeneration: {}
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function Provider({ children }) {
  const [storedValue, setValue] = useState(initialValues);
  const [state, dispatch] = useReducer(reducer, storedValue);

  useEffect(() => {
    setValue(state);
  }, [state]);

  return (
    <ContextState.Provider value={state}>
      <ContextDispatch.Provider value={dispatch}>{children}</ContextDispatch.Provider>
    </ContextState.Provider>
  );
}

function useContextState() {
  const context = React.useContext(ContextState);

  if (context === undefined) {
    throw new Error('useContextState must be used within a Provider');
  }

  return context;
}

function useContextDispatch() {
  const context = React.useContext(ContextDispatch);

  if (context === undefined) {
    throw new Error('useContextDispatch must be used within a Provider');
  }

  return context;
}

export { Provider, useContextState, useContextDispatch };
