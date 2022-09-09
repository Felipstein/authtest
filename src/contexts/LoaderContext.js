import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const LoaderContext = createContext();

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const loadingProvider = useMemo(() => ({
    loading, setLoading,
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
