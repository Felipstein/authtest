import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container } from './styles';

export default function Toast({
  id, text, duration, onRemoveToast,
}) {
  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onRemoveToast(id);
    }, duration);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  function handleRemoveToast() {
    onRemoveToast(id);
  }

  return (
    <Container
      role="button"
      onClick={handleRemoveToast}
    >
      {text}
    </Container>
  );
}

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.any.isRequired,
  duration: PropTypes.number,
  onRemoveToast: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  duration: 6000,
};
