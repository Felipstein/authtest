import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container } from './styles';

export default function Toast({
  id, duration, onRemoveToast, children,
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
      tabIndex={0}
      role="button"
      onClick={handleRemoveToast}
    >
      {children}
    </Container>
  );
}

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  duration: PropTypes.number,
  onRemoveToast: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Toast.defaultProps = {
  duration: 6000,
};
