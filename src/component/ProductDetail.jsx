import React from "react";
import "../style/productDetail.css";

export default function ProductDetail(props) {
  return (
    <div className="product-detail">
      <img
        src="https://thaibinhford.com/public/upload/images/hinh_sanpham/ford-everest-the-he-moi-2024-platinum-4x4-at-ford-everest-the-he-moi-2024-platinum-4x4-at-1712982268705.jpg"
        alt=""
      />
      <h2>Product Detail</h2>
      <p>{props.item.name}</p>
      <p>{props.item.age}</p>
      <p>{props.item.gender}</p>
      <p>{props.item.major}</p>
    </div>
  );
}
