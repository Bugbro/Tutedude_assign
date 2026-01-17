import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        setLoading(true);
        fetch(`${url}`)
        .then((res)=> res.json())
        .then((res)=>{
            if(isMounted){
                setData(res);
                setLoading(false);
            }
        })
        .catch((error)=>{
            if(isMounted){
                setError(error.message);
                setLoading(false);
            }
        });

        return ()=> isMounted=false;
    },[url])

    return {data, loading, error};
}

export default useFetch;