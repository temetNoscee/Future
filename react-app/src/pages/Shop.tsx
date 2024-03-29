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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>();
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch(
        `http://localhost:8080/api?name=${searchQuery}&category=${selectedCategory}`
      );
      const body = await response.json();
      setFurnitures(body);
    };
    getDatas();
  }, [searchQuery, selectedCategory]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:8080/api/categories");
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, [setCategories]);

  return (
    <Title title={"Shop"}>
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter category">
                <select
                  id="categorycal"
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    if (value === "Select category") {
                      return;
                    }
                    setSelectedCategory(value);
                  }}
                >
                  <option>Select category</option>
                  {categories.map((category) => {
                    return (
                      <option value={category} key={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search... "
                  id="search-input"
                  onChange={(e) => {
                    console.log(e.currentTarget.value);
                    setSearchQuery(e.currentTarget.value ?? "");
                  }}
                />
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
