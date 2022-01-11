import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { Container } from '../container';

const CardImage = styled(Card.Img)`
  &:hover {
    cursor: pointer;
  }
`;

const experts = [
  {
    image: '/static/images/girl.jpg',
    name: 'A',
    desc: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  },
  {
    image: '/static/images/boy.jpg',
    name: 'B',
    desc: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  },
  {
    image: '/static/images/girl.jpg',
    name: 'C',
    desc: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  },
  {
    image: '/static/images/boy.jpg',
    name: 'D',
    desc: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  },
  {
    image: '/static/images/girl.jpg',
    name: 'E',
    desc: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  },
  {
    image: '/static/images/boy.jpg',
    name: 'F',
    desc: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  },
];

export function Experts() {
  const [expand, setExpand] = useState(-1);

  const onImageClick = (index) => {
    if (index === expand) {
      setExpand(-1);
    } else {
      setExpand(index);
    }
  };

  // eslint-disable
  return (
    <Container>
      <h2>Our Experts</h2>
      <Container>
        <Row>
          {experts.map((expert, index) => {
            const shoulldExpand = index === expand;
            return (
              <Col xs={12} sm={shoulldExpand ? 12 : 4} key={expert.name} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Card className="border-0">
                  <Col xs={12} sm={shoulldExpand ? 4 : 12}>
                    <CardImage variant="top" src={expert.image} onClick={() => onImageClick(index)} />
                  </Col>
                  {shoulldExpand && (
                    <Card.Body>
                      <Card.Title>{expert.name}</Card.Title>
                      <Card.Text>{expert.desc}</Card.Text>
                      <Button variant="primary">Book an appointment</Button>
                    </Card.Body>
                  )}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}
