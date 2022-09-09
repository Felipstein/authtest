import { useState } from 'react';

export default function useUser(initialName) {
  const [name, setName] = useState(initialName || localStorage.getItem('username'));

  if (initialName) {
    localStorage.setItem('username', initialName);
  }

  function setNameAndStore(newName) {
    if (!newName) {
      localStorage.removeItem('username');
      setName(null);
    }

    localStorage.setItem('username', newName);
    setName(newName);
  }

  function isAuth() {
    return !!name;
  }

  function logout() {
    setNameAndStore(null);
  }

  return {
    name, setName: setNameAndStore, isAuth, logout,
  };
}
