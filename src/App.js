import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Img from "./hassen_frere.jpg";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // Implementing the setInterval method
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clearing the interval
    clearInterval(this.interval);
  }
  states = {
    Person: {
      fullName: "Hassen T",
      bio: "Biggest playboy",
      imgSrc: Img,
      profession: "CEO at PlayBoy Tunisia",
    },
    show: false,
  };
  toggleVisibility = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        <Container className="center-container">
          <Row>
            <div className="App">
              <h1>App Timer: {this.state.count}</h1>
              <h1>Checkpoint State</h1>
              <button
                className="visibility-btn"
                onClick={this.toggleVisibility}
              >
                {this.state.show === true ? "Hide" : "Show"}
              </button>
              {this.state.show && (
                <Col md={3} sm={6} className="mb-3">
                  <Card className=".Card-style">
                    <Card.Img
                      variant="top"
                      src={this.states.Person.imgSrc}
                      height="400"
                      style={{ objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        <h6> Full Name: {this.states.Person.fullName} </h6>
                        <h6> Bio: {this.states.Person.bio}</h6>
                        <h6>Profession: {this.states.Person.profession} </h6>
                      </Card.Title>
                      {/* <h1>Profile Timer: {this.state.count}</h1> */}
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
