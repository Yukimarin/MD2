import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
function HomePage() {
  return (
    <div>
      {/* START MAIN */}
      <main>
        <img src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg'></img>
      </main>
      <Product />
      {/* END MAIN */}
    </div>
  );
}

export default HomePage;
