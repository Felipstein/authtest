import { useState } from 'react';
import Toast from '..';

import { Container } from './styles';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([
    {
      id: Math.random(),
      text: 'This is a toast!',
    },
  ]);

  function handleRemoveToast(id) {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  }

  return (
    <Container>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          onRemoveToast={handleRemoveToast}
        >
          {toast.text}
        </Toast>
      ))}
    </Container>
  );
}
