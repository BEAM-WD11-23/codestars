import axios from "axios";
import { useCallback, useEffect, useState } from "react";


function useFetch(url){
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    const [refetch, setRefetch] = useState(0)

    const refresh = useCallback(() => setRefetch(prevState => ++prevState), [])

    useEffect(()=>{
        // before starting a new request it should be pending
        setIsPending(true)
        //The START of a new request
        axios.get(url)
        .then((axiosResponse) => {
            setData(axiosResponse.data)
            setErrors(null)
        })
        .catch((axiosError) => {
            setData(null)
            setErrors(axiosError.message)
        })
        .finally(() => {
            setIsPending(false)
        })
    }, [refetch])

    return { isPending, data, errors, refresh }
}

export default useFetch;