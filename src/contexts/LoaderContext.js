import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const LoaderContext = createContext();

export default function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const loadingProvider = useMemo(() => ({
    isLoading, setIsLoading,
  }));

  return (
    <LoaderContext.Provider value={loadingProvider}>
      {children}
    </LoaderContext.Provider>
  );
}

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
