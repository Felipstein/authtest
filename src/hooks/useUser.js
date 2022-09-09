import { useState } from 'react';

export default function useUser() {
  const [name, setName] = useState(localStorage.getItem('username'));

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
