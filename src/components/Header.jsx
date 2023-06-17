import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '/src/css/header.css'
import { FiMenu } from 'react-icons/fi';
import { FaShoppingCart, FaHeart ,FaUser  } from 'react-icons/fa';



  const Header = () => {
 
const [mobileNav,setMobileNav]=useState(false)
 
const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});

// Function to handle window resize
const handleResize = () => {
  setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  if(windowSize.width>=768){
    setMobileNav(false)
  }
};

useEffect(() => {
  // Attach event listener on component mount
  window.addEventListener('resize', handleResize);
  document.body.style.overflow = mobileNav ? 'hidden' : 'auto';

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
const closeToggle=()=>{
  setMobileNav(false)

}
  const setupToggler = () => {
    setMobileNav(!mobileNav)
  }
  return (
    <header>

      <nav className='navigation shadow bg-light'>
        <div className="logo">
          <img src="/src/assets/images/logo.webp" alt="" />
        </div>
        <ul   className='nav-lists'>
          <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to='/#'>About</Link></li>
          <li className='nav-item'><Link className='nav-link' to='/#'>Contact</Link></li>

          <li className='nav-item'><Link className='nav-link' to='/shop'>shop</Link></li>
          <li className='nav-item'><Link className='nav-link' to='/auth'>< FaUser className='text-primary'/></Link></li>
          <li className='nav-item'><Link className='nav-link' to='/withlist'><FaHeart className='text-danger'/><sup>4</sup></Link></li>
          <li className='nav-item'><Link className='nav-link' to='/cart'><FaShoppingCart className='text-success'/><sup>3</sup></Link></li>

        </ul>
       {mobileNav && (
         <ul id='nav' className='mobile-nav'>
          <button className="close-btn" onClick={closeToggle}>x</button>
          <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
          <hr />
         
          <li className='nav-item'><Link className='nav-link' to='/#'>About</Link></li>
          <hr />
          <li className='nav-item'><Link className='nav-link' to='/#'>Contact</Link></li>
          <hr />
          
          <li className='nav-item'><Link className='nav-link' to='/shop'>shop</Link></li>

          <hr />

          <li className='nav-item'><Link className='nav-link' to='/auth'>< FaUser className='text-primary'/></Link></li>
          <li className='nav-item'><Link className='nav-link' to='/withlist'><FaHeart className='text-danger'/><sup>4</sup></Link></li>
          <li className='nav-item'><Link className='nav-link' to='/cart'><FaShoppingCart className='text-success'/><sup>3</sup></Link></li>


        </ul>)}
        <div className="toggle">
          <FiMenu onClick={setupToggler} />
        </div>
      </nav>
    </header>
  )
}
export default Header