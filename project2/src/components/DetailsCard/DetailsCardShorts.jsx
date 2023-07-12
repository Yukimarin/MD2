import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function DetailsCardShorts() {
  return (
    <div>
      <div className='details-shorts'>
        <div className='modal-text-img'>
          <div className='modal-img'>
            <img src='' />
          </div>
          <div className='modal-text'>
            <h2>name</h2>
            <bdi>price</bdi>
            <p>Sản phẩm được đóng gói gồm :</p>
            <ul>
              <li>Tem mác giấy logo đầu chuột Skincare</li>
              <li>Bộ sticker Skincare</li>
              <li>Giấy thơm Bounce nhập khẩu từ Mỹ</li>
              <li>Tem niêm phong sản phẩm</li>
              <li>Tem niêm phong hộp Skincare</li>
            </ul>
            <p>Official Store – Skincare®️</p>
            <p>IG : Skincare_original</p>
            <strong>HANOI CITY :</strong>
            <div>70 Quan Thanh Str, Quan Thanh Ward – Ba Dinh Dist</div>
            <div>
              Skincare Villa 35 Alley 268/21 Ngoc Thuy Str – Long Bien Dist
            </div>
            <strong>HO CHI MINH CITY :</strong>
            <div>149/21 Le Thi Rieng Str, Ben Thanh Ward – Dist.1</div>
            <strong>DA NANG:</strong>
            <div>Skincare Beach Club 01 Yet Kieu Str, Son Tra Dist</div>
            <div>Hotline : 0838966996 – 0702001202</div>
            <p>Contact us : ceo@Skincare.com</p>

            <div className='bt-ip-pay' style={{ marginTop: "20px" }}>
              <Link to='/cart'>
                <Button>THÊM VÀO GIỎ HÀNG</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCardShorts;
