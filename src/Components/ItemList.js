import React from 'react'

const ItemList = ({items}) => {
    // console.log(items)

  return (
    <div className=''>
    
           {
            items.map((item, index) => {
                return(
                    <div key={index} className='flex m-2 p-2  border-b-2 border-gray-200'>
                      <div className='w-6/12 '> 
                          <div className='text-left'>
                        <strong className='block text-lg font-semibold'>{item.name}</strong>
                        <span className='block'>{item.price || item.defaultPrice}</span>
                        </div>
                      </div>
                      {/* --for image */}
                      <div className='w-6/12 p-2'>
                      <div className='flex justify-end '>
                       <img  src={item.imgUrl} alt='items'    className='w-28 h-24 object-cover rounded-md shadow-md' />
                         <button className='px-2 py-1 bg-black text-white shadow-lg absolute  mx-6 rounded-lg'>Add +</button>
                       </div>
                      </div>
                    </div>
                )
            })
           }
        
    </div>
  )
}

export default ItemList