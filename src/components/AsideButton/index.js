import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function AsideButton({ selected, danger, children }) {
  return (
    <Container selected={selected} danger={danger}>
      <Link to="/">
        {children}
      </Link>
    </Container>
  );
}

AsideButton.propTypes = {
  selected: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

AsideButton.defaultProps = {
  selected: false,
  danger: false,
};
