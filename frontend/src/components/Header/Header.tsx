import React from 'react';
import '../Header/header.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-modified.png';

import { Container,Row } from 'reactstrap';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav">
                        <div className="logo">
                            <img width="40" height="40" src={logo} alt="brand-logo" />
                            <div>
                                <h1>Future</h1>
                            </div>
                        </div>

                        <div className="navigate">
                            <ul className="menu">
                                <li className="nav-item">
                                    <NavLink to='home'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='shop'>Shop</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="menu-icons">
                            <span className='fav-icon'><img src="https://img.icons8.com/ios-glyphs/30/hearts.png" alt="hearts"/>
                            </span>
                            <span className='cart-icon'>
                                <img src="https://img.icons8.com/pastel-glyph/64/paper-bag--v2.png" alt="paper-bag--v2"/>
                                <span className="num">2</span>
                            </span>
                            <span className="user-icon"><img src="https://img.icons8.com/small/32/user.png" alt="user"/></span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;