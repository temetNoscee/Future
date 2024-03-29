import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={"home"}/>}></Route>
            <Route path='home' element={<Home/>}></Route>
            <Route path='shop' element={<Shop/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='shop/:id' element={<ProductDetails/>}></Route>
        </Routes>
    );
}

export default Routers;
