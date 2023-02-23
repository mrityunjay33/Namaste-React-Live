import { useState, useEffect} from 'react';

const useOnline = () => {
    const [isOnline, setIsOnline ] = useState(true);

    useEffect(()=>{

        const handleOffline = () => {
            setIsOnline(false);
        };
        const handleOnline = () => {
            setIsOnline(true);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("online", handleOffline);
        };
    },[])
    return isOnline;
};
export default useOnline;