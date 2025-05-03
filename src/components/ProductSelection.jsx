import React from 'react'

const SelectProducts = [
  { 
    image: '/images/UN•UW Balloons.png', 
    name: 'UN•UW Balloons', 
    price: '₱ 250', 
    color: ['Gold',  'Red', "Blue", "Sky Blue", "Violet", "Yellow", "White", "Green", "Pastel Blue", "Pastel Pink", "Pastel Violet", "Pastel Yellow"], 
    type: ["Standard", "Metallic", "Chrome"], 
    size: ['5"', '6"', '10"', '12"'] 
  }, 
]

function ProductSelection() {
  return (
    <div className='absolute border-2 bg-white p-12 rounded-lg w-[1000px] h-[560px] bottom-10 left-60'>
      {SelectProducts.map((item, index) => (
        <div key={index} className='border-2 flex'>
          <img className='h-110 border-2'
            src={item.image} alt="product" 
          />

          <div>
            <div className='border-2 flex flex-col gap-4'>
              <p className='text-3xl font-bold'>{item.name}</p>
              <p className='text-2xl font-bold'>{item.price}</p>
            </div>

            <div className='border-2 '>
              <p className='font-bold'>Color:</p>
              <div className='flex flex-wrap gap-2'>
                {item.color.map((color, i) => (
                  <button key={i} className='border-2 rounded-full p-1 text-xs font-bold'>
                    {color}
                  </button>
                ))}
              </div>

              <div className='border-2 flex gap-12'>
                <div>
                  <p className='font-bold'>Type:</p>
                  <div className='flex gap-2'>
                    {item.type.map((type, idx) => (
                      <button key={idx} className='border-2 rounded-full p-1 text-xs font-bold'>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                    <p className='font-bold'>Size:</p>
                    <div className='flex gap-2'>
                      {item.size.map((size, idx) => (
                        <button key={idx} className='border-2 rounded-md p-1 text-xs font-bold'>
                          {size}
                        </button>
                      ))}
                    </div>
                </div>

              </div>

              <div className='flex'>
                <div className='q flex-grow'>
                  <button className='border-2 h-8 w-8 rounded-md'>-</button>
                  <input className='border-2 h-8 w-10 rounded-md text-center' type="text" value="1"/>
                  <button className='border-2 h-8 w-8 rounded-md'>+</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSelection