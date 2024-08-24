import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import "./about.scss";

export default function About() {
  return (
    <Container className=" mt-sm-5 py-5 px-5">
      <div>
        <Row className="gap-3">
          <Col md={true}>
            <Card className=" p-0">
              <Card.Header as="h5" className="card-title text-center">
                What Does the App Do?
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  After entering the name of an existing subreddit into the
                  search bar, the app will retrieve select relevant details,
                  which can be found below (It is very simple, and not terribly
                  useful to be sure. It was only intended to be practice).
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Subscriber Count</ListGroup.Item>
                <ListGroup.Item>Year Created</ListGroup.Item>
                <ListGroup.Item>
                  Subreddit Rules (Only those rules defined in about/rules)
                </ListGroup.Item>
                <ListGroup.Item>Description</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={true}>
            <Card className="p-0 h-100">
              <Card.Header as="h5" className="card-title text-center">
                About the Dev
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Developed by Christopher Vidal, majoring in Computer Science
                  at Carleton University as of development time, as practice
                  using React.js, Bootstrap and Typescript. In addition to
                  diving into unfamiliar tools such as these, his hobbies
                  include catching up on current events, riding his bike, and
                  playing with his pet cat. If time permits, he can appreciate a
                  good video game too.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
