import PropTypes from 'prop-types';

import { createContext } from 'react';
import useUser from '../hooks/useUser';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
