import React, { useEffect, useState } from "react";

import Title from "../components/Title/Title";
import CommonSection from "../components/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import image from "../assets/furn/chair-1.jpg";
import ProductCard from "../components/Product/ProductCard";

interface Furniture {
  id: number;
  name: string;
  price: string;
  category: string;
}

const Shop: React.FC = () => {
  const [furnitures, setFurnitures] = useState<Furniture[]>([]);
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch("http://localhost:8080/api");
      const body = await response.json();
      setFurnitures(body);
    };
    getDatas();
  }, []);

  return (
    <Title title={"Shop"}>
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter category">
                <select id="categorycal">
                  <option>Filter By Category</option>
                  <option value="chair">Chair</option>
                  <option value="floorLamp">Floor Lamp</option>
                  <option value="plant">Sofa</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search">
                <input type="text" placeholder="Search... " id="search-input" />
                <span>
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios/50/0a1d37/search--v1.png"
                    alt="search--v1"
                  />
                </span>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter sort">
                <select id="sorting-filter">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>

        {furnitures.map((furniture) => {
          return (
            <div key={furniture.id}>
              <ProductCard
                productImg={image}
                productName={furniture.name}
                productPrice={furniture.price}
                productType={furniture.category}
              />
            </div>
          );
        })}
      </section>
    </Title>
  );
};

export default Shop;
