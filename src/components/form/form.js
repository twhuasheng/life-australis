import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Container } from '../container';

const Label = ({ children }) => (
  <Form.Label column sm={5} className="text-start text-sm-center">
    {children}
  </Form.Label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

const schema = Yup.object().shape({
  firstName: Yup.string().min(1).required(),
  lastName: Yup.string().min(1).required(),
  email: Yup.string().email('Invalid email').required(),
  phone: Yup.string().min(1).required(),
  reason: Yup.string().min(1).max(255, 'Too Long!').required(),
  contactMethod: Yup.string().required(),
});

export function FormContent() {
  return (
    <Container>
      <h2>Contact us</h2>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          reason: '',
          contactMethod: '',
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, errors, touched }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="validationFormik01">
              <Label>First Name</Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                  placeholder="Enter first name"
                />
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validationFormik02">
              <Label>Last Name</Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                  placeholder="Enter last name"
                />
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validationFormik02">
              <Label>Email Address </Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                <Form.Text className="text-muted">We&apos; ll never share your email with anyone else.</Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validationFormik04">
              <Label>Phone Number</Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isValid={touched.phone && !errors.phone}
                  isInvalid={!!errors.phone}
                  placeholder="Enter your phone number"
                />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validationFormik05">
              <Label>Reason for contacting us:</Label>
              <Col sm={7}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="reason"
                  value={values.reason}
                  onChange={handleChange}
                  isValid={touched.reason && !errors.reason}
                  isInvalid={!!errors.reason}
                  placeholder="How can we help you?"
                />
                <Form.Control.Feedback type="invalid">{errors.reason}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationFormik06">
              <Form.Label>Which way you prefer to be contacted?</Form.Label>
              <div role="group" className="mb-3">
                <Form.Check
                  inline
                  label="Phone"
                  name="contactMethod"
                  type="radio"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFieldValue('contactMethod', 'Phone');
                    }
                  }}
                  isInvalid={!!errors.contactMethod}
                  id="inline-radio-1"
                  checked={values.contactMethod === 'Phone'}
                />
                <Form.Check
                  inline
                  label="Email"
                  name="contactMethod"
                  type="radio"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFieldValue('contactMethod', 'Email');
                    }
                  }}
                  isInvalid={!!errors.contactMethod}
                  id="inline-radio-2"
                  checked={values.contactMethod === 'Email'}
                />
                <p className="text-danger" style={{ fontSize: '.875em' }}>
                  {errors.contactMethod ? 'Choose one' : null}
                </p>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
