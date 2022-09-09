import PropTypes from 'prop-types';

import backgroundWhite from '../../assets/images/background_white.svg';
import background from '../../assets/images/background.svg';

import BackgroundImg from './styles';

export default function Background({ width, height, white }) {
  return (
    <BackgroundImg
      src={white ? backgroundWhite : background}
      alt="Background"
      width={width}
      height={height}
    />
  );
}

Background.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  white: PropTypes.bool,
};

Background.defaultProps = {
  width: '463px',
  height: '463px',
  white: false,
};
