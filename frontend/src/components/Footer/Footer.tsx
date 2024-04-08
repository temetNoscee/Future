import React from 'react';

import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-modified.png';
import '../Footer/footer.css'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container>
                <Row lg='12'>
                        <Col>
                            <div className="logo-f">
                                <img src={logo} alt="brand-logo" />
                                <div>
                                    <h1>Future</h1>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className='quick-links'>
                                <ul>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><Link to='/shop'>Shop</Link></li>
                                    <li><Link to='/cart'>Cart</Link></li>
                                    <li><Link to='/login'>Login</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col>
                            <div className='contact'>
                                <h3>Contact</h3>
                                <div className='contact-detail'>
                                    <img src="https://img.icons8.com/ios/50/ffffff/marker--v1.png" alt="marker--v1"/>
                                    <p>9876 Rainbow Boulevard, Fantasia City, Fairyland</p>
                                </div>
                                <div className='contact-detail'>
                                    <img src="https://img.icons8.com/windows/32/ffffff/phone.png" alt="phone"/>
                                    <p>+901414141</p>
                                </div>
                                <div className='contact-detail'>
                                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png" alt="new-post"/>
                                    <p>example@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                </Row>

                <Row>
                <Col>
                    <div className='copyright'>
                        <p>&copy;2024.All rights reserved. Designed by Future </p>
                    </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;

 