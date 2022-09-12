import PropTypes from 'prop-types';

import background from '../../assets/images/background.svg';
import { Container } from './styles';

export default function Background({ width, height, relative }) {
  if (relative) {
    return (
      <img className="background" src={background} alt="Background" style={{ width, height }} />
    );
  }

  return (
    <Container>
      <img className="background" src={background} alt="Background" style={{ width, height }} />
    </Container>
  );
}

Background.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  relative: PropTypes.bool,
};

Background.defaultProps = {
  width: '463px',
  height: '463px',
  relative: false,
};
