import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

import { Container } from '../container';
import { Clock } from './clock';

export const FeatureCarousel = ({ fade }) => (
  <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Carousel fade={fade}>
      <Carousel.Item>
        <img className="d-block w-100" src="/static/images/student1.jpg" alt="First slide" />
        <Carousel.Caption>
          <Clock />
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/static/images/student2.jpg" alt="Second slide" />

        <Carousel.Caption>
          <Clock />
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/static/images/student3.jpg" alt="Third slide" />

        <Carousel.Caption>
          <Clock />
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
);

FeatureCarousel.propTypes = {
  fade: PropTypes.bool,
};

FeatureCarousel.defaultProps = {
  fade: false,
};
