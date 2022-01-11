import Wrapper from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

export function Container({ children, ...props }) {
  return (
    <Wrapper className="mt-5, mb-5" {...props}>
      {children}
    </Wrapper>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
