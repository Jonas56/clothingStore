import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import './header.styles.scss'


const Header = () => (
    <div className='header'>
        <BrowserRouter>
            <Link className='container-logo' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">
                    SHOP
            </Link>
                <Link className='option' to="/contact" >
                    CONTACT
            </Link>
            </div>
        </BrowserRouter>
    </div>
);

export default Header;