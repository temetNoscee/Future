import React from "react";
import { Row, Col, Container } from "reactstrap";
import Sofa from "../assets/sofa-33.jpg";
import "../styles/quantity.css";
import { Form, useLoaderData } from "react-router-dom";

export interface Furniture {
  id: number;
  name: string;
  price: string;
  category: string;
  stock: number;
}

const Quantity: React.FC = () => {
  const { furnitures } = useLoaderData() as { furnitures: Furniture[] };
  return (
    <section>
      <Container>
        {furnitures.map((furniture) => (
          <Row key={furniture.id}>
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
                      <td>{furniture.name}</td>
                      <td>{furniture.category}</td>
                      <td>${furniture.price}</td>
                      <td>{furniture.stock}</td>
                      <td>
                        <Form method="post">
                          <input
                            type="hidden"
                            name="furniture-id"
                            value={furniture.id}
                          />
                          <input
                            type="number"
                            name="stock"
                            defaultValue={furniture.stock}
                          />
                          <button>Change Quantity</button>
                        </Form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Quantity;
