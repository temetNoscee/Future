import React from "react";
import "../Product/productCard.css";
import { Link } from "react-router-dom";

interface ProductCardProps {
  imageId: string;
  productName: string;
  productPrice: string;
  productType: string;
  productId: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageId,
  productName,
  productPrice,
  productType,
  productId,
}) => {
  return (
    <div className="item">
      <div className="product-img">
        <img src={`/api/furniture/${productId}/thumbnail`} alt="product" />
      </div>

      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/shop/${productId}`}>{productName}</Link>
        </h3>
        <p>{productType}</p>
      </div>

      <div className="price-shop">
        <h4>${productPrice}</h4>
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
