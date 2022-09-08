import { useEffect, useState } from 'react';

import EventManager from '../../../libs/EventManager';

import Toast from '..';
import { Container } from './styles';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function handleAddToast({ text, duration }) {
      setToasts((prevState) => [
        ...prevState,
        { id: Math.random(), text, duration },
      ]);
    }

    EventManager.on('addtoast', handleAddToast);

    return () => {
      EventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  function handleRemoveToast(id) {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  }

  return (
    <Container>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          text={toast.text}
          onRemoveToast={handleRemoveToast}
        />
      ))}
    </Container>
  );
}
