import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export function useFetchMultiple(urlArray) {

    const [isPending, setIsPending] = useState(true)
    const [combinedData, setCombinedData] = useState(null)
    const [errors, setErrors] = useState(null)
    const [refetch, setRefetch] = useState(0)

    const refresh = useCallback(() => setRefetch(prev => ++prev),[])

    useEffect(()=>{
        setIsPending(true) //(make sure 100%) in every new request isPending is true by default
        if(Array.isArray(urlArray)){

            const allStartedPromises = urlArray.map(url => {
                return axios.get(url)
            })
    
            const mergedPromise = Promise.all(allStartedPromises)
            mergedPromise.then(responses => {
                setCombinedData(responses.map(response => response.data))
                setErrors(null)
            })
            .catch(err => {
                setCombinedData(null)
                setErrors(err.message)
            })
            .then(()=>{
                setIsPending(false)
            })
        }
        else{
            throw new Error("You MUST pass an array to useFetchMultiple hook. 'urlArray' is not an array")
        }
    }, [refetch])

    return { isPending, combinedData, errors, refresh }
}
export default useFetchMultiple


// axios