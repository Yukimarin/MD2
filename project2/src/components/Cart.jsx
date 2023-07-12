import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import axios from "axios";

function Cart() {
  return (
    <div className='cartt'>
      <div className='table'>
        <Table>
          <thead>
            <tr>
              <th colSpan={3}>SẢN PHẨM</th>
              <th>GIÁ</th>
              <th>SỐ LƯỢNG</th>
              <th>TẠM TÍNH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingTop: "40px" }}>
                <i className='fa-solid fa-trash fa-xl'></i>
              </td>
              <td>
                <img src='' />
              </td>
              <td style={{ padding: "25px" }}>Name</td>
              <td style={{ fontWeight: "bold", padding: "25px" }}>Price</td>
              <td style={{ padding: "25px" }}>
                <button style={{ backgroundColor: "white", border: "none" }}>
                  -
                </button>
                Count
                <button style={{ backgroundColor: "white", border: "none" }}>
                  +
                </button>
              </td>
              <td style={{ fontWeight: "bold", padding: "25px" }}>Price</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='table2'>
        <div className='table3'>
          <Table style={{ marginTop: "20px", width: "100%" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid gray" }}>
                <th style={{ color: "gray" }}>Giỏ hàng</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid gray" }}>
                <td style={{ color: "gray" }}>Tạm tính</td>
                <td style={{ fontWeight: "bold" }}></td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Giao hàng</td>
                <td>
                  <p>Đồng giá: 30.000₫</p>

                  <p>
                    Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh
                    toán.
                  </p>

                  <p>Tính phí giao hàng</p>
                </td>
              </tr>
              <tr style={{ borderTop: "1px solid gray" }}>
                <th style={{ color: "gray" }}>Tổng</th>
                <td style={{ fontWeight: "bold" }}>
                  {/* {cart.length ? totalProduct() + 30000 : ""}₫ */}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* {purchased ? ( // Hiển thị thông báo cảm ơn nếu purchased là true
          <Alert variant="success" className="thank-you-alert">
            <Alert.Heading>Cảm ơn quý khách đã mua hàng!</Alert.Heading>
            <p>Chúng tôi rất vui được phục vụ quý khách.</p>
          </Alert>
        ) : ( */}
        <div className='information-button'>
          <Button variant='primary' type='submit'>
            ĐẶT HÀNG
          </Button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Cart;
