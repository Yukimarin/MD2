import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import DetailsCardShorts from "./components/DetailsCard/DetailsCardShorts";

import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  console.log(userLogin);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };

  return (
    <div className='App'>
      {/* START HEADER */}
      <div className='sticky'>
        <header>
          <div className='header-img'>
            <Link to='/'>
              <img src='https://static.vecteezy.com/system/resources/previews/011/955/016/original/skincare-logo-design-lotion-cream-logo-vector.jpg' />
            </Link>
          </div>
        </header>
        {/* END HEADER */}
        {/* START NAV */}
        <nav>
          <div className='nav-1'>
            <ul>
              <li>
                <Link
                  to='/'
                  style={{ textDecoration: "none", color: "#cccccc" }}
                >
                  <p>HOME</p>
                </Link>
              </li>
              <li>
                <a>
                  <NavDropdown
                    id='nav-dropdown-white-example'
                    title='SHOP'
                    menuVariant='white'
                  >
                    <ul className='list'>
                      <li>
                        <Dropdown.ItemText>TOPS</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className='list-font'>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Shirt</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Sweater</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>T-Shirts</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Tank Top</Dropdown.ItemText>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>BOTTOM</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className='list-font'>
                          <Link to='/productshorts' className='deco-item'>
                            <Dropdown.ItemText className='font-list'>
                              Shorts
                            </Dropdown.ItemText>
                          </Link>
                          <NavDropdown.Divider />
                          <Link to='/product' className='deco-item'>
                            <Dropdown.ItemText className='font-list'>
                              Pants
                            </Dropdown.ItemText>
                          </Link>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>ACCESSORIES</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className='list-font'>
                          <Dropdown.ItemText>Mask & Scarf</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Phone Case</Dropdown.ItemText>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>FOOTWEAR</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className='list-font'>
                          <Dropdown.ItemText>Slippers</Dropdown.ItemText>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>HEADWEAR</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className='list-font'>
                          <Dropdown.ItemText>Cap & Snapback</Dropdown.ItemText>
                        </div>
                      </li>
                    </ul>
                  </NavDropdown>
                </a>
              </li>
              <li>
                <a>Summer Shop</a>
              </li>
              <li>
                <a>Skincare</a>
              </li>
              <li>
                <a>Hair</a>
              </li>
              <li>
                <a>Make up</a>
              </li>
              <li>
                <a>Tools</a>
              </li>
              <li>
                <a>Bath & Shower</a>
              </li>
            </ul>
          </div>
          <div className='nav-2'>
            {userLogin == null ? (
              <ul>
                <>
                  <li>
                    <Link
                      to='/login'
                      style={{ textDecoration: "none", color: "#cccccc" }}
                    >
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link
                      to='/register'
                      style={{ textDecoration: "none", color: "#cccccc" }}
                    >
                      <span>Register</span>
                    </Link>
                  </li>
                </>

                <li>
                  <Link
                    to='/cart'
                    style={{ textDecoration: "none", color: "#ccc" }}
                  >
                    {" "}
                    <i class='fa-solid fa-cart-shopping fa-flip-horizontal'></i>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <>
                  <li>
                    <span>{userLogin.name}</span>
                    <button onClick={handleLogOut}>LogOut</button>
                  </li>
                </>

                <li>
                  <Link
                    to='/cart'
                    style={{ textDecoration: "none", color: "#ccc" }}
                  >
                    {" "}
                    <i class='fa-solid fa-cart-shopping fa-flip-horizontal'></i>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
      {/* END NAV */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      {/* START FOOTER */}
      <Footer></Footer>
      <div className='end-footer'>
        Copyright 2023 ©<strong>Skincare</strong>
      </div>
      {/* END FOOTER */}
    </div>
  );
}

export default App;
