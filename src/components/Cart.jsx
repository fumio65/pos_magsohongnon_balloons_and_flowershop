import React from 'react'

const cartItems = [
  { image: '/images/Metallic Balloon.png', name: 'UN&UW Metallic Balloon', variation: '10" Green', quantity: 2, price: 250, total: 500, delete: '/icons/trash.svg' },
  { image: '/images/Metallic Balloon.png', name: 'UN&UW Metallic Balloon', variation: '10" Green', quantity: 2, price: 250, total: 500, delete: '/icons/trash.svg' },
  { image: '/images/Metallic Balloon.png', name: 'UN&UW Metallic Balloon', variation: '10" Green', quantity: 2, price: 250, total: 500, delete: '/icons/trash.svg' },
]

function Cart({ className = ''}) {
  return (
    <div 
      style={{ gridArea: 'cart' }}
      className={`flex flex-col bg-white rounded-lg p-4 gap-2 ${className}`}
    >
      <div className='flex items-center justify-between'>
        <p className='font-bold text-xl'>New Order Bill</p>
        <span className='text-side-text text-sm font-bold'>Monday 5 may 2025</span>
      </div>
      <hr />


      {cartItems.map((item, index) => (
        <div className='border-2 flex p-1 '>
          <div className='flex flex-col gap-2 w-max py-1'>
            <div className='flex'>
              <img className='h-15'
              src={item.image} alt="item" />
              <div className=' flex flex-col gap-1'>
                <p className='font-bold'>{item.name}</p>
                <p className='text-sm text-side-text'>{item.variation}</p>
              </div>
            </div>

            <div className='flex justify-center gap-1 '>
              <button className='border-2 h-8 w-8 font-bold bg-side-text rounded-md'>-</button>
              <input className='border-2 w-16 text-center rounded-md' type="text" value={item.quantity} />
              <button className='border-2 h-8 w-8 font-bold bg-side-text rounded-md'>+</button>
            </div>
          </div>
          
          <div className='flex-grow flex flex-col items-center justify-between py-1'>
            <p className='font-bold text-xl'>{item.total}</p>
            <button className='border-2 p-1 rounded-full'>
              <img className='h-6'
               src={item.delete} alt="" />
            </button>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default Cart
