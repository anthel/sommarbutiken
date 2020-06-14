import React from 'react'

function Nav(props) {


  

  return (
      <nav>
        <h1>SOMMARBUTIKEN</h1>
        <div id="cart">
          <h4>CART</h4>
          <h4 id="amountInCart">{props.amountInCart}</h4>
        </div>
      </nav>
  )
}

export default Nav;
