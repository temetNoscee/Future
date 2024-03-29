//import React from "react";
import { Container,Row,Col } from "reactstrap";
import '../Advantages/advantages.css'

const data = [
    {
        title: 'Free Shipping!',
        subtitle: 'Benefit from our free shipping service on all orders! Shop with ease and without worrying about extra costs.',
        link: 'https://img.icons8.com/ios/50/ffffff/free-shipping.png',
        color: '#fdefe6',
    },
    {
        title: 'Secure Payment',
        subtitle: 'Benefit from our secure payment system. Shop with ease and confidence, knowing that your transactions are protected.',
        link: 'https://img.icons8.com/ios/50/ffffff/card-security.png',
        color: '#C8E6E8'
    },
    {
        title: 'Support 24/7',
        subtitle: 'Benefit from our secure payment system. Shop with ease and confidence, knowing that your transactions are protected.',
        link: 'https://img.icons8.com/ios-filled/50/ffffff/hotline.png',
        color: '#DFEAAC',
    }

]

const Advantages = ()=>{
    return <Container>
        <Row>
            {
                data.map((item,index)=>(
                    <Col lg='4' md='4' key={index}>
                        <div className="adv-item" style={{background: item.color}}>
                            <span>
                                <img src={item.link} alt={item.title} />
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </Container>
}

export default Advantages