import React from "react";
import ProductDetail from "./ProductDetail";
import "../style/product.css";

let students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    gender: "Nam",
    major: "Công nghệ thông tin",
  },
  { id: 2, name: "Trần Thị Bình", age: 21, gender: "Nữ", major: "Kinh tế" },
  {
    id: 3,
    name: "Lê Hoàng Chi",
    age: 22,
    gender: "Nam",
    major: "Điện tử viễn thông",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    age: 19,
    gender: "Nữ",
    major: "Thiết kế đồ họa",
  },
  {
    id: 5,
    name: "Hoàng Văn Minh",
    age: 23,
    gender: "Nam",
    major: "Quản trị kinh doanh",
  },
];

export default function Product() {
  let mangGen = [];
  for (let i in students) {
    mangGen.push(<ProductDetail item={students[i]} />);
  }
  return <div className="product">{mangGen}</div>;
}
