import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function AsideButton({ children }) {
  return (
    <Container>
      <Link to="/">
        {children}
      </Link>
    </Container>
  );
}

AsideButton.propTypes = {
  children: PropTypes.node.isRequired,
};
