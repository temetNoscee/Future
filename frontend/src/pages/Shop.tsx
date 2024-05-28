import React, { useEffect, useState } from "react";

import Title from "../components/Title/Title";
import CommonSection from "../components/CommonSection/CommonSection";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "../styles/shop.css";

import ProductCard from "../components/Product/ProductCard";
import { useLoaderData, useSearchParams } from "react-router-dom";

export interface Furniture {
  id: number;
  name: string;
  price: string;
  category: string;
  imageId: string;
  description: string;
}

type Paged<T> = {
  content: T;
  totalPages: number;
  pageable: {
    pageNumber: number;
  };
};

const Shop: React.FC = () => {
  const [furnitures, setFurnitures] = useState<Paged<Furniture[]>>({
    content: [],
    totalPages: 0,
    pageable: {
      pageNumber: 0,
    },
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [params] = useSearchParams();
  const page = params.get("page") ?? 0;
  useEffect(() => {
    const getDatas = async () => {
      const url = `http://localhost:8080/api/furniture?name=${searchQuery}&category=${selectedCategory}&page=${page}`;
      console.log(url);
      const response = await fetch(url);
      const body = await response.json();
      setFurnitures(body);
    };
    getDatas();
  }, [searchQuery, selectedCategory]);

  const { categories } = useLoaderData() as { categories: string[] };

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
          </Row>
        </Container>

        <div className="shop-items">
          {furnitures.content.map((furniture) => {
            return (
              <div key={furniture.id} className="product-wrapper">
                <ProductCard
                  imageId={furniture.imageId}
                  productName={furniture.name}
                  productPrice={furniture.price}
                  productType={furniture.category}
                  productId={furniture.id}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Pagination>
        <PaginationItem>
          <PaginationLink href="?page=0" first></PaginationLink>
        </PaginationItem>
        {Array.from({ length: furnitures.totalPages }, (_, i) => {
          return (
            <PaginationItem
              key={i}
              active={furnitures.pageable.pageNumber === i}
            >
              <PaginationLink href={`?page=${i}`}>{i + 1}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink
            href={`?page=${furnitures.totalPages - 1}`}
            last
          ></PaginationLink>
        </PaginationItem>
      </Pagination>
    </Title>
  );
};

export default Shop;
