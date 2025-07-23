import { useEffect, useState } from "react"
import { RES_MENU } from "./Constents";
const useRestaurantMenu = (resId)=>{
    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const data = await fetch(RES_MENU +resId);
            const json = await data.json();
            setResInfo(json.data);
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[resId]);


    return resInfo
}

export default useRestaurantMenu;