import React from "react";
import "../Product/productCard.css";

interface ProductCardProps {
  imageId: string;
  productName: string;
  productPrice: string;
  productType: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageId,
  productName,
  productPrice,
  productType,
}) => {
  return (
    <div className="item">
      <div className="product-img">
        <img
          src={`http://localhost:8080/images/${imageId}.jpg`}
          alt="product"
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p>{productType}</p>
      </div>

      <div className="price-shop">
        <h4>{productPrice}</h4>
        <span>
          <img
            src="https://img.icons8.com/ios/50/ffffff/add--v1.png"
            alt="add--v1"
          />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
