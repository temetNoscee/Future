import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Title from "../components/Title/Title";
import "../styles/productDetails.css";
import { Furniture } from "./Shop";

const ProductDetails: React.FC = () => {
  const [tab, setTab] = useState("desc");
  const [gosterilecekYorumSayisi, setGosterilecekYorumSayisi] = useState(5);
  const yorumlariGoster = () => {
    setGosterilecekYorumSayisi((prevSayi) => prevSayi + 5);
  };
  const { product } = useLoaderData() as { product: Furniture };

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit Quo nam ipsum corporis vero fugit veritatis odit obcaecati omnis, velit temporibus, aliquam molestias doloremque! Hicplaceat voluptas enim laboriosam dolore ipsum?Lorem ipsumdolor sit amet consectetur, adipisicing elit. Numquam, ullamdicta asperiores voluptate nostrum architecto laboriosamqui, quisquam soluta doloribus quod illo quos repellatfugiat. Ratione dignissimos quasi perferendis quaerat.";
  interface Yorum {
    id: number;
    kullaniciAdi: string;
    metin: string;
  }
  const ornekYorumlar: Yorum[] = [
    { id: 1, kullaniciAdi: "kullanici1", metin: "Harika bir ürün!" },
    { id: 2, kullaniciAdi: "kullanici2", metin: "Kargo çok hızlı geldi." },
    { id: 3, kullaniciAdi: "kullanici3", metin: "Ürün beklediğim gibi çıktı." },
    { id: 4, kullaniciAdi: "kullanici1", metin: "Harika bir ürün!" },
    { id: 5, kullaniciAdi: "kullanici2", metin: "Kargo çok hızlı geldi." },
    { id: 6, kullaniciAdi: "kullanici3", metin: "Ürün beklediğim gibi çıktı." },
    // Daha fazla yorum...
  ];

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

                  <textarea
                    className="comment-area"
                    name=""
                    id=""
                    placeholder="Leave a comment...."
                  ></textarea>
                  <button className="btn-submit">Submit</button>
                  <h6 className="titleforreview">Reviews</h6>
                  {ornekYorumlar
                    .slice(0, gosterilecekYorumSayisi)
                    .map((yorum, index) => (
                      <div key={index}>
                        <img
                          width="32"
                          height="32"
                          src="https://img.icons8.com/small/32/user.png"
                          alt="user"
                        />
                        <div className="rvw-txt">
                          <h6>{yorum.kullaniciAdi}</h6>
                          <p>{yorum.metin}</p>
                        </div>
                      </div>
                    ))}
                  {gosterilecekYorumSayisi < ornekYorumlar.length && (
                    <button className="btn-more" onClick={yorumlariGoster}>
                      Daha Fazla Göster
                    </button>
                  )}
                </div>
              ) : (
                <div className="tab-content seller">
                  <textarea
                    name=""
                    id=""
                    placeholder="Ask a question about product..."
                  ></textarea>
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
