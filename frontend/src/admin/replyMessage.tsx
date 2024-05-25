import React from "react";
import { Row, Col, Container } from "reactstrap";
import exmp from "../assets/sofa-39.jpg";
import "../styles/answer.css";
const Questions: React.FC = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h4>Pending Questions</h4>
            <div className="pending-question">
              <div className="question">
                <img src={exmp} alt="" />
                <div className="product-info">
                  <h6>Chair</h6>
                  <p>What is the size of this chair? I need a clear example.</p>
                </div>
              </div>
              <div className="response">
                <h5>Response</h5>
                <textarea name="response"></textarea>
              </div>
              <button className="submit-reponse">Submit Response</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Questions;
