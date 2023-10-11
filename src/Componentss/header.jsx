import React from 'react';
import Cart from './cart.svg';
import {Link} from "react-router-dom";
import "./../index.css"


function Header() {

    return (
        <>
            <header>
                
                <div >
           <ul>
                   <li> <img className="logo" src="https://i0.wp.com/siliconspectra.com/wp-content/uploads/2019/12/pxemartlogosvg-157658413984pcl.png?fit=700%2C198&ssl=1" alt=''/>
                   </li>
                   <li>
                    <Link className="link" to="/shop">Shop</Link>
                    </li>
                    <li>
<Link className="link" to="/login">Login/Register</Link>
</li>                 
<li>
                   <a href='#cart'><input className="cart-icon" type="image" alt="Cart" src={Cart} width="30" /></a> 
                   </li>
                   </ul>
                </div>


            </header>
        </>
    )
}


export default Header
