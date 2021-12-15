import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { cardStyle } from '../styles/cardStyle';

const CourseCard = (props) => {
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t.toDateString();
  }

  return (
    <Card
      className='my-3 p-3 rounded'
      bg={cardStyle.bg}
      text={cardStyle.text}
      style={cardStyle}
    >
      <Card.Body>
        <Card.Title className='cardTitle'>{props.course.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.course.course}
          {props.course.courseCode}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'>
          {toDateTime(props.course.createdAt.seconds)}
        </Card.Subtitle>

        <Card.Text className='cardText'>
          {props.course.credits} {props.course.creditUnitLabel}
        </Card.Text>

        <Card.Text className='cardText'>
          {props.course.educationalLevel}
        </Card.Text>

        {props.showRating && (
          <Card.Text as='div' className='cardText'>
            <Rating value={props.course.rating} text={` rating`} />
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
