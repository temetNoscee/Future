import React from "react";
import { FormGroup, Container, Row, Col } from "reactstrap";
import "../styles/addProduct.css";
import { Form, useLoaderData } from "react-router-dom";

const AddProduct: React.FC = () => {
  const { categories } = useLoaderData() as { categories: string[] };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h4>Add Product</h4>
            <Form
              name="add-product-form"
              method="post"
              encType="multipart/form-data"
            >
              <FormGroup className="form-group">
                <span>Product title</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Insert product name.."
                  required
                />
              </FormGroup>

              <FormGroup className="form-group">
                <span>Description</span>
                <input
                  name="description"
                  type="text"
                  placeholder="Short explation of the product..."
                />
              </FormGroup>
              <div className="info">
                <FormGroup className="form-group">
                  <span>Price</span>
                  <input name="price" type="number" required />
                </FormGroup>
                <FormGroup className="form-group">
                  <span>Stock Information</span>
                  <input name="stock" type="number" required />
                </FormGroup>
                <FormGroup className="form-group">
                  <span>Category</span>
                  <select name="category" required defaultValue={categories[0]}>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
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
