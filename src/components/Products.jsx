import React from 'react'

const productGrid = [
  { image: '/images/Metallic Balloon.png', name: 'Standard Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'No/Letter Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Bobo Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
  { image: '/images/Metallic Balloon.png', name: 'Metallic Balloon', price: '₱ 250', quantity: 10 },
]

function Products({ className = ''}) {
  return (
    <div 
      style={{
         gridArea: 'product-grid',
         gridTemplateColumns: 'repeat(4, 1fr)',


        }}
      className={`rounded-lg grid gap-4 max-h-[550px] overflow-auto scrollbar-hide ${className}`}
    >
      {productGrid.map((item, index) => (
        <div key={index} className='flex flex-col items-center justify-center bg-white p-2 rounded-lg opacity-100 hover:opacity-70 transition duration-300 ease-in-out cursor-pointer transform hover:scale-101'>
          <img className='h-55'
           src={item.image} alt="item" />
          <div className='flex flex-col w-full gap-4 '>
            <p className='text-xl font-bold'>
              {item.name}
            </p>
            <div className='flex items-center justify-between px-2'>
              <p className='text-lg font-bold'> {item.price}</p>
              <p className='text-md text-side-text'>{item.quantity} left</p>
            </div>
          </div>
          
          
        </div>
      ))}
      
    </div>
  )
}

export default Products
