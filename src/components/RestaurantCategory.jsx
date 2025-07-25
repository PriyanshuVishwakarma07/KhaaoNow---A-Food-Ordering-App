import React, { useState } from 'react'
import ItemList from './ItemList';
const RestaurantCategory = ({resCat, showItems, setShowIndex}) => {
    const {title, itemCards} = resCat;
    const handleclick = () =>{
        setShowIndex();
    }
    // console.log(title , itemCards)
  return (
    <div>
        <div className='' onClick={handleclick}>
            <div className='flex items-center justify-between my-4 bg-zinc-100 p-4 rounded-lg hover:bg-zinc-200 transition-all duration-300 ease-in-out'>
            <h2 className='text-xl font-semibold my-4'>{title} ({itemCards.length}) </h2>
            <h2>🔽</h2>
         </div>
            {showItems && <ItemList items={itemCards} />}
         
         </div>
    </div>
  )
}

export default RestaurantCategory