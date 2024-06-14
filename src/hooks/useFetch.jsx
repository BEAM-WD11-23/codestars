import { useEffect, useState } from "react"


function useFetch(endpoint) {
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    const [status, setStatus] = useState(null)

    // const options = {
    //     method: config?.method?.toUpperCase(),
    //     headers: {"Content-Type":"application/json"},
    //     body: JSON.stringify(config?.data)
    // }

    const customErrorMessage = {
        401: "You are not authenticated",
        403: "You are not allowed to access this resources",
        404: "not found.",
        408: "Your request took too long",
        500: "Server issues. Contact support.",
        503: "The server might be down. Try again later."
    }

    useEffect(()=>{
        setIsPending(true) //(make sure 100%) in every new request isPending is true by default

        fetch(endpoint)
        .then(response => {
            setStatus(response.status)
            if(response.ok) return response.json() 
            throw new Error(customErrorMessage[response.status] || response.statusText)
        })
        .then(data => {
            setIsPending(false)
            setData(data)
            setErrors(null)
        })
        .catch(err => {
            setIsPending(false)
            setData(null)
            setErrors(err.message)
        })

    }, [endpoint])

    return {isPending, data, errors, status}
}
export default useFetch



/**
 * fetch for GET => fetch(endpoint)
 * 
 * fetch for POST => fetch(endpoint, {
 *      method: "POST",
 *      headers: {"Content-Type":"application/json"},
 *      body: JSON.stringify(whateverThatDataIs)
 * })
 * 
 * fetch for PUT => fetch(endpoint/id, {
 *      method: "PUT",
 *      headers: {"Content-Type":"application/json"},
 *      body: JSON.stringify(updatedVersionVal)
 * })
 * 
 * fetch for DELETE => fetch(endpoint/id, {
 *      method: "DELETE",
 * })
 * 
 */