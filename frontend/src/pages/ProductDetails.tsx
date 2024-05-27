import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Title from "../components/Title/Title";
import "../styles/productDetails.css";
import { Furniture } from "./Shop";

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

const ProductDetails: React.FC = () => {
  const [tab, setTab] = useState("desc");
  const [displayedCommentNumber, setDisplayedCommentNumber] = useState(5);
  const showMoreComments = () => {
    setDisplayedCommentNumber((count) => count + 5);
  };
  const { product, comments, question } = useLoaderData() as {
    product: Furniture;
    comments: Comment[];
    question: Question | null;
  };

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit Quo nam ipsum corporis vero fugit veritatis odit obcaecati omnis, velit temporibus, aliquam molestias doloremque! Hicplaceat voluptas enim laboriosam dolore ipsum?Lorem ipsumdolor sit amet consectetur, adipisicing elit. Numquam, ullamdicta asperiores voluptate nostrum architecto laboriosamqui, quisquam soluta doloribus quod illo quos repellatfugiat. Ratione dignissimos quasi perferendis quaerat.";
  interface Comment {
    id: number;
    user: { username: string };
    content: string;
    stars: number;
  }

  return (
    <Title title={`${product?.name}`}>
      <CommonSection title={`${product?.name}`} />

      <section className="detail">
        <Container>
          <Row>
            <Col lg="5">
              <img
                src={`http://localhost:8080/images/${product?.imageId}.jpg`}
                alt=".product-detail"
              />
            </Col>

            <Col lg="7">
              <div className="product-detail">
                <h2>{product?.name}</h2>
                <div className="product-rating">
                  <div>
                    <span>
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ff8c00/ios-glyphs/15/star--v1.png"
                        alt="star--v1"
                      />
                    </span>
                    <span>
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ff8c00/ios-glyphs/15/star--v1.png"
                        alt="star--v1"
                      />
                    </span>
                    <span>
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ff8c00/ios-glyphs/15/star--v1.png"
                        alt="star--v1"
                      />
                    </span>
                    <span>
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ff8c00/ios-glyphs/15/star--v1.png"
                        alt="star--v1"
                      />
                    </span>
                    <span>
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ff8c00/material/15/star-half-empty--v1.png"
                        alt="star-half-empty--v1"
                      />
                    </span>
                  </div>

                  <p>(4.5 ratings)</p>
                </div>
                <span className="price">${product?.price}</span>
                <p className="product-desc">{loremText}</p>

                <button className="shop-btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab-wrapper">
                <h6
                  className={`${tab == "desc" ? "active-tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab == "rew" ? "active-tab" : ""}`}
                  onClick={() => setTab("rew")}
                >
                  Reviews
                </h6>
                <h6
                  className={`${tab == "ask" ? "active-tab" : ""}`}
                  onClick={() => setTab("ask")}
                >
                  Ask to the seller
                </h6>
              </div>

              {tab == "desc" ? (
                <div className="tab-content description">
                  <p>{loremText}</p>
                </div>
              ) : tab == "rew" ? (
                <div className="tab-content review">
                  <h6 className="titleforreview">Leave Your Experience</h6>

                  <Form method="post" className="d-flex flex-column gap-1">
                    <input type="hidden" name="_action" value="comment" />
                    <textarea
                      className="comment-area"
                      name="content"
                      placeholder="Leave a comment...."
                    ></textarea>
                    <label htmlFor="stars">
                      Stars
                      <input
                        id="stars"
                        type="number"
                        name="stars"
                        min={0}
                        max={5}
                        className="px-2 py-1 rounded-md"
                      />
                    </label>
                    <button className="btn-submit">Submit</button>
                  </Form>
                  <h6 className="titleforreview">Reviews</h6>
                  {comments
                    .slice(0, displayedCommentNumber)
                    .map((comment, index) => (
                      <div key={index}>
                        <img
                          width="32"
                          height="32"
                          src="https://img.icons8.com/small/32/user.png"
                          alt="user"
                        />
                        <div className="rvw-txt">
                          <h6>{comment.user.username}</h6>
                          <p>{comment.content}</p>
                          <p>{comment.stars}</p>
                        </div>
                      </div>
                    ))}
                  {displayedCommentNumber < comments.length && (
                    <button className="btn-more" onClick={showMoreComments}>
                      Daha Fazla Göster
                    </button>
                  )}
                </div>
              ) : (
                <div className="tab-content seller">
                  <Form method="post">
                    <input type="hidden" name="_action" value="ask" />
                    <textarea
                      name="content"
                      placeholder="Ask a question about product..."
                    ></textarea>
                    <button className="btn-submit">Submit</button>
                  </Form>
                  {question && (
                    <div className="question">
                      <h6>Question</h6>
                      <p>{question.content}</p>
                      <h6>Answer</h6>
                      <p>{question.response}</p>
                    </div>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default ProductDetails;
