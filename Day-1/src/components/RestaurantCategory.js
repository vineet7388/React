import ItemList from "./ItemList"
import React from "react"
const RestaurantCategory = ({data,showItems,setShowIndex}) => {

  // const [showItems,setShowItems] = useState(false)

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div>
        <div className="w-6/12 mx-auto my-2 bg-gray-50">
            
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span>{data.title} ({data.itemCards.length})</span>
            <span>{ showItems ? '⬆️' : '⬇️'}  </span>
            </div>
            { showItems && <ItemList items={data.itemCards} key={data.title}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory