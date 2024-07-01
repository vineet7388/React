import RestaurantCard, {withPromotedLabel} from './RestaurantCard'
import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';

const Body = () => {
    const [resListData, setResListData] = useState([]);
    const [resFilteredData, setResFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5938014&lng=73.7423039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setResListData(jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResFilteredData(jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    

    const onlineStatus = useOnlineStatus();
    const {loggedInUser,setUserName}=useContext(UserContext)
    if(!onlineStatus){
        return (<div>Looks like u are offline...</div>)
        }
    else{
        if(resFilteredData?.length===0){
            return (<h1>Loading...</h1>)
        }
    return (
        <div className='body'>
            <div className='filter'>
                <div className="search  m-4 p-4">
                    <input type="text" data-testid='search-box' className="search-box mr-4 border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-800 rounded-md"onClick={()=>{
                        const filterRes = resListData.filter((res)=>res.info.name.toLowerCase().includes((searchText.toLowerCase())))
                        setResFilteredData(filterRes)
                    }}>Search</button>
                    <button className='filter-btn px-4 py-2 bg-green-800 mx-4 rounded-md'onClick={()=>{
                    const filteredList = resListData.filter((res)=>res.info.avgRating>4)
                    setResFilteredData(filteredList)
                }}>Top rated Restaurant</button>
                <label>User Name: </label>
                <input type="text" className="search-user mr-4 border border-solid border-black" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                
            </div>
            <div className='res-container flex flex-wrap '>
                {resFilteredData?.map((res)=>(
                    <Link to={"/restaurant/"+res.info.id}>
                         {res.info.avgRating>4.5 ? (<RestaurantCardPromoted key={res.info.id} resData={res}/>) :
                        (<RestaurantCard key={res.info.id} resData={res}/>)}
                    </Link>
                ))}
            </div>
        </div>
    )
}
}

export default Body