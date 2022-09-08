import PropTypes from 'prop-types';

import copyIcon from '../../assets/images/icons/copy.svg';

import { Container } from './styles';

export default function ButtonCopy({ textToCopy, onCopy }) {
  function handleCopy() {
    navigator.clipboard.writeText = textToCopy;

    if (onCopy) {
      onCopy();
    }
  }

  return (
    <Container onClick={handleCopy}>
      <h2>{textToCopy}</h2>
      <div id="separator" />
      <img src={copyIcon} alt="Copy" />
    </Container>
  );
}

ButtonCopy.propTypes = {
  textToCopy: PropTypes.string.isRequired,
  onCopy: PropTypes.func,
};

ButtonCopy.defaultProps = {
  onCopy: undefined,
};
