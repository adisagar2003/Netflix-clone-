import React, { useEffect, useState } from 'react';
import "./Nav.css";
function Nav() {

  const [show,setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if (window.scrollY>100){
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll",()=>{});
    }
  }, []);

  return (
    <div class={`nav ${show && "nav_black"}`}>
        <img 
        className="nav__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
        alt="netflix logo"

        />
         <img 
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar logo"
  
        />
    </div>
  )
}

export default Nav