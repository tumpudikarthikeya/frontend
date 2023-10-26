import React from 'react'
import {Container , Row , Button} from 'reactstrap';
import {NavLink , Link} from 'react-router-dom';

import logo from "../../assets/images/logo.png";

const nav_links = [
  {
    path : "/home",
    display: "Home"
  },
  {
    path : "/#",
    display: "About"
  },
  {
    path : "/tours",
    display: "Tours"
  }
]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* logo start*/}
          <div className="logo">
            <img src={logo} alt='logo'/>
          </div>
          {/* logo end*/}

          {/* menu start*/}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav_links.map((item,index) =>(
                  <li className="nav_items">
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* menu end*/}
         <div className="nav_right d-flex aligign-items-center gap-4">
              <div className="nav_btns d-flex aligign-items-center gap-4">
                <Button className='' ><Link to="/login">
                Login
                </Link>
                </Button>
                <Button className='' color='primary'><Link to="/register">
                Register
                </Link>
                </Button>
              </div>
          <span className="mobile_menu">
          <i class="ri-menu-line"></i>
          </span>
         </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header