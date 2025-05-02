import React from 'react'

function Products({ className = ''}) {
  return (
    <div 
      style={{ gridArea: 'product-grid' }}
      className={`border-2 ${className}`}
    >
      
    </div>
  )
}

export default Products
