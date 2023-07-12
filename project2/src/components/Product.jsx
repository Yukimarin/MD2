import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardShorts from "./Card/CardShorts";
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8008/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='background-product'>
      {/* START HEADER */}
      <div className='head-product'>
        <div className='head-product1'>
          <a>Products</a>
          <p>/</p>
          <strong>Skincare</strong>
        </div>

        <div className='head-product2'>
          <p>Showing all 15 results</p>

          <div className='select-product'>
            <Form.Select aria-label='Default select example'>
              <option>Mới nhất</option>
              <option value='1'>Thứ tự theo mức độ phổ biến</option>
              <option value='2'>Thứ tự theo điểm đánh giá</option>
              <option value='3'>Thứ tự theo giá: thấp đến cao</option>
              <option value='4'>Thứ tự theo giá: cao xuống thấp</option>
            </Form.Select>
          </div>
        </div>
      </div>
      {/* END HEADER */}

      <div className='text-product'>
        {product.map((e, i) => (
          <CardShorts element={e} />
        ))}
      </div>
    </div>
  );
}

export default Product;
