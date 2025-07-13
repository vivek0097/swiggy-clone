import React from 'react'

const RestaurantCategory = ({data}) => {
    console.log(data, "data on acc")

  return (
    <div>
      <div>
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default RestaurantCategory