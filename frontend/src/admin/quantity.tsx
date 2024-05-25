import React from "react";
import { Row, Col, Container } from "reactstrap";
import Sofa from "../assets/sofa-33.jpg";
import "../styles/quantity.css";
const Quantity: React.FC = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="center-div">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={Sofa} alt="product-img" />
                    </td>
                    <td>Chair</td>
                    <td>Sofa</td>
                    <td>$15</td>
                    <td>25</td>
                    <td>
                      <input type="number" />
                      <button>Change Quantity</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quantity;
