import React from "react";
import { Form, FormGroup, Container, Row, Col } from "reactstrap";
import "../styles/addProduct.css";
const AddProduct: React.FC = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h4>Add Product</h4>
            <Form name="add-product-form">
              <FormGroup className="form-group">
                <span>Product title</span>
                <input
                  name="title"
                  type="text"
                  placeholder="Insert product name.."
                />
              </FormGroup>

              <FormGroup className="form-group">
                <span>Description</span>
                <input
                  name="desc"
                  type="text"
                  placeholder="Short explation of the product..."
                />
              </FormGroup>
              <div className="info">
                <FormGroup className="form-group">
                  <span>Price</span>
                  <input name="price" type="number" />
                </FormGroup>
                <FormGroup className="form-group">
                  <span>Stock Information</span>
                  <input name="stock" type="number" />
                </FormGroup>
                <FormGroup className="form-group">
                  <span>Category</span>
                  <select name="category">
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="floor-lamp">Floor Lamp</option>
                  </select>
                </FormGroup>
              </div>
              <FormGroup className="form-group">
                <span>Product image</span>
                <input name="image" type="file" />
              </FormGroup>
              <button className="shop-btn">Add Product</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AddProduct;
