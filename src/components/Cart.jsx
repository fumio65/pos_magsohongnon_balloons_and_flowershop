import React from 'react'

function Cart({ className = ''}) {
  return (
    <div 
      style={{ gridArea: 'cart' }}
      className={`border-2 ${className}`}
    >
      
    </div>
  )
}

export default Cart
