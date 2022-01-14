/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { P } from '../typography';

const ContainerStyled = styled(Container)`
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: black;
  color: gray;
`;

const RowStyled = styled(Row)`
  margin-top: 50px;
  margin-bottom: 50px;
  display: inline-flex;
  width: 100%;
`;

const Astyled = styled.a`
  font-family: 'Montserrat, sans-serif;';

  &:link {
    color: grey;
  }
  &:visited {
    color: green;
  }
  &:hover {
    color: blue;
  }
  &:active {
    color: lightblue;
  }
`;
export function FooterStyled() {
  return (
    <ContainerStyled fluid>
      <RowStyled>
        <Col xs={6} sm={{ span: 4, offset: 2 }} md={{ span: 3, offset: 3 }}>
          <Astyled href="#">PRIVATE POLICY</Astyled>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <Astyled href="#">WEBSITE DISCLAIMER</Astyled>
        </Col>
      </RowStyled>
      <Row>
        <P>
          Address:
          <Astyled href="#" style={{ color: 'grey' }}>
            1 Melbourne street, Melbourne, VIC,3000
          </Astyled>
        </P>
      </Row>
      <Row>
        <P>
          <i>1300123123</i> (From whith Australia)
        </P>
      </Row>
      <Row>
        <P>
          <i>+61 3 98764678</i> (From whith Australia)
        </P>
      </Row>
      <Row>
        <P>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Astyled href="#" style={{ color: 'grey' }}>
            team@lifeaustalis.com.au
          </Astyled>
        </P>
      </Row>
      <Row>
        <P>@2021 Life Australis - All rights reserved</P>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }} style={{ fontSize: '2rem' }}>
          <Astyled href="https://www.facebook.com/Google/" style={{ marginRight: '1.5rem' }} target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="sm" />
          </Astyled>
          <Astyled href="https://www.google.com" style={{ marginRight: '1.5rem' }} target="_blank">
            <FontAwesomeIcon icon={faGoogle} size="sm" />
          </Astyled>
          <Astyled href="https://www.twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </Astyled>
        </Col>
      </Row>
    </ContainerStyled>
  );
}
