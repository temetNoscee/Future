import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Banner from "../assets/slider.png";
import Advantages from "../components/Advantages/Advantages";
import Title from "../components/Title/Title";
import "../styles/home.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../components/Product/ProductCard";

//import demo from "../assets/slider.png";
import { Furniture } from "./Shop";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Home: React.FC = () => {
  const { products } = useLoaderData() as { products: Furniture[] };
  return (
    <Title title={"Home"}>
      <section className="banner-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="banner-content">
                <p>Transform Your Space with Timeless Elegance:</p>
                <h2>Discover Our Exquisite Furniture Collection Today!</h2>
                <p>
                  Elevate your home with handcrafted pieces designed to inspire.
                </p>

                <button className="shop-btn">
                  <Link to="/shop">Shop Now!</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="banner-img">
                <img src={Banner} alt="banner-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Advantages />

      <div className="carousel">
        <h1>Editor's Pick</h1>
        <Carousel responsive={responsive}>
          {products.map((product) => {
            return (
              <ProductCard
                imageId={product.imageId}
                productName={product.name}
                productPrice={product.price}
                productType={product.category}
                key={product.id}
                productId={product.id}
              />
            );
          })}
        </Carousel>
        ;
      </div>
    </Title>
  );
};

export default Home;
