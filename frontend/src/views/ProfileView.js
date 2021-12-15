import { Col, Row, Button, Form } from 'react-bootstrap';

const ProfileView = (props) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    props.handleUpdate(e);
  };
  return (
    <div>
      <h2>Your Profile</h2>
      <Form onSubmit={(e) => handleUpdate(e)}>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-12'>
              <Form.Text> Email </Form.Text>
              <Form.Control
                value={props.email}
                disabled
                style={{ color: 'grey' }}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-12'>
              <Form.Text> Name </Form.Text>
              <Form.Control
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
                type='text'
                placeholder={props.name}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-12'>
              <Form.Text>Program </Form.Text>
              <Form.Control
                value={props.program}
                onChange={(e) => props.setProgram(e.target.value)}
                type='text'
                placeholder={props.program}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-12'>
              <Form.Text> School </Form.Text>
              <Form.Control
                value={props.school}
                onChange={(e) => props.setSchool(e.target.value)}
                type='text'
                placeholder={props.school}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-12'>
              <Form.Text> Year </Form.Text>
              <Form.Control
                value={props.year}
                onChange={(e) => props.setYear(e.target.value)}
                type='text'
                placeholder={props.year}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-3'>
            <Col className='col-sm-12'>
              <Button type='submit' variant='success'>
                Update
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProfileView;
