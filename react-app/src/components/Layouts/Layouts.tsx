import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routers/routers';

const Layouts: React.FC = () => {
    return (
        <>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </>
    );
}

export default Layouts;