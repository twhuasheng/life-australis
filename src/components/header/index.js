import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

export function Header() {
  // eslint-disable-next-line no-alert
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  /* const [error, setError] = useState(); */
  const setDefaultCoordinates = () => {
    setLocation({ latitude: 0, longitude: 0 });
  };
  const onSuccess = (position) => {
    if (position.coords) {
      setLocation(position.coords);
      // console.log(position);
    } else {
      setDefaultCoordinates();
    }
  };
  const onError = () => {
    setDefaultCoordinates();
  };

  useEffect(() => {
    if (!location) {
      // ask for current location, if not permitted, use default location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        setDefaultCoordinates();
      }
    }
  }, []);

  useEffect(() => {
    if (!location) return;

    const api = {
      key: process.env.REACT_APP_WEATHER_API_KEY,
      base: 'https://api.openweathermap.org/data/2.5/',
    };

    fetch(`${api.base}weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then(setWeather)
      /* ((obj) => {
        if (obj.code === 200) {
          setWeather(obj);
        } else {
          setError(obj);
        }
      }) */
      .catch((err) => {
        console.log('err', err);
      });
  }, [location]);

  return (
    <div
      style={{
        background: 'url("/static/images/universe.jpg") no-repeat center center fixed',
        backgroundSize: 'cover',
      }}
    >
      <Row>
        <Navbar expand={false}>
          <Container fluid style={{ marginBottom: 0 }}>
            <Navbar.Brand href="#">Life Australis</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Row>
      <Row style={{ color: 'white' }}>
        {!weather ? (
          <p>Loading...</p>
        ) : (
          <>
            <Col sm={8} style={{ textAlign: 'left', paddingLeft: '35px' }}>
              <h1>Weather Today {`${weather.name}, ${weather.sys.country}`}</h1>
            </Col>
            <Col sm={4}>
              <h1>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
                {Math.round(weather.main.temp)}
                <span>°C</span>
              </h1>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}
