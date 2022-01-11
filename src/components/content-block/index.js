import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../container';
import { P } from '../typography';

const StyledP = styled(P)`
  font-size: 2rem;
  font-family: 'Miama';
`;

export function ContentBlock({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <StyledP>{text}</StyledP>;
  }

  return (
    <Container>
      <StyledP>{hidden ? `${text.substr(0, maxLength).trim()} ...` : text}</StyledP>
      {hidden ? (
        <button type="button" onClick={() => setHidden(false)}>
          {' '}
          read more
        </button>
      ) : (
        <button type="button" onClick={() => setHidden(true)}>
          {' '}
          read less
        </button>
      )}
    </Container>
  );
}

ContentBlock.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

ContentBlock.defaultProps = {
  maxLength: 200,
};
