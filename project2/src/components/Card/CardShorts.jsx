import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

function CardShorts(props) {
  const { element } = props;
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const handleBuy = (id) => {};
  return (
    <div className='product'>
      <div className='product-details'>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant='top' src={element.imageURL} />
          <Card.Body>
            <Card.Text style={{ color: "grey", fontSize: "small" }}>
              {element.papBanner_text}
            </Card.Text>
            <Card.Title>{element.productBlock_productName}</Card.Title>
            <Card.Text style={{ fontWeight: "bold" }}>
              {element.productBlock_priceValue}$
            </Card.Text>

            <div className='cardshorts-link'>
              {" "}
              <button onClick={() => handleBuy(element.id)}>MUA NGAY</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardShorts;
