import React from "react";
import { Row, Col, Container } from "reactstrap";
import exmp from "../assets/sofa-39.jpg";
import "../styles/answer.css";
import { Form, useLoaderData } from "react-router-dom";

type Question = {
  id: number;
  content: string;
  response: string;
  user: {
    id: number;
    username: string;
  };
  furniture: {
    id: number;
    name: string;
  };
};

const Questions: React.FC = () => {
  const { questions } = useLoaderData() as { questions: Question[] };
  const pendingQuestions = questions.filter((question) => !question.response);

  return (
    <section>
      <Container>
        {pendingQuestions.map((question) => (
          <Row>
            <Col lg="8">
              <h4>Pending Questions</h4>
              <div className="pending-question">
                <div className="question">
                  <img src={exmp} alt="" />
                  <div className="product-info">
                    <h6>{question.furniture.name}</h6>
                    <p>{question.content}</p>
                  </div>
                </div>
                <Form method="post">
                  <input type="hidden" name="question-id" value={question.id} />
                  <div className="response">
                    <h5>Response</h5>
                    <textarea name="response"></textarea>
                  </div>
                  <button className="submit-reponse">Submit Response</button>
                </Form>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Questions;
