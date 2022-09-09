import PropTypes from 'prop-types';

import background from '../../assets/images/background.svg';

import BackgroundImg from './styles';

export default function Background({ width, height }) {
  return (
    <BackgroundImg
      src={background}
      alt="Background"
      width={width}
      height={height}
    />
  );
}

Background.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Background.defaultProps = {
  width: '463px',
  height: '463px',
};
