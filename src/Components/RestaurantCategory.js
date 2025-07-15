import  {useState} from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
 
const handleClick =() => {
  setShowIndex();
}


  return (
    <div className='flex justify-center '>
      {/* header------- */}
      <div className='w-6/12 bg-gray-50 shadow-lg p-4 '> 
      <div className='flex justify-between' onClick={handleClick}>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards?.length})</span>
        <span>🔽</span>
         </div>
         {showItems &&  <ItemList items={data.itemCards} />}
          </div>
    </div>
  )
}

export default RestaurantCategory