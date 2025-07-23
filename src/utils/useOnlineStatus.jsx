import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [isOnlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", () =>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);  
        })
    },[])
    return isOnlineStatus;
}

export default useOnlineStatus;