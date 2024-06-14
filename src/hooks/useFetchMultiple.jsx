import { useCallback, useEffect, useState } from "react"

export function useFetchMultiple(endpointArray) {

    const [isPending, setIsPending] = useState(true)
    const [combinedData, setCombinedData] = useState(null)
    const [errors, setErrors] = useState(null)
    const [refetch, setRefetch] = useState(0)

    const refresh = useCallback(() => setRefetch(prev => ++prev),[])

    useEffect(()=>{
        setIsPending(true) //(make sure 100%) in every new request isPending is true by default
        
        if(Array.isArray(endpointArray)){
            const allStartedPromises = endpointArray.map(endpoint => {
                return fetch(endpoint)
                .then(response => {
                    if(response.ok) return response.json()
                    throw new Error(response.statusText)
                })
            })
    
            const allPromises = Promise.all(allStartedPromises)
            allPromises.then(combinedData => {
                setIsPending(false)
                setCombinedData(combinedData)
                setErrors(null)
            })
            .catch(err => {
                setIsPending(false)
                setCombinedData(null)
                setErrors(err.message)
            })
        }
        else{
            throw new Error("You MUST pass an array to useFetchMultiple hook. 'endpointArray' is not an array")
        }
    },[refetch])

    return {isPending, combinedData, errors, refresh}
}
export default useFetchMultiple