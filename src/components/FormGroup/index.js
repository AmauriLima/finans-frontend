import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error, id }) {
  return (
    <Container id={id}>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  id: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
  id: null,
};
