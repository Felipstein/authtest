import styled from 'styled-components';

export default styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  user-select: none;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  filter: blur(3px);
  -webkit-filter: blur(3px);

  z-index: -1;
`;
