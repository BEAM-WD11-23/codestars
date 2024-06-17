import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(endpoint) {
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(()=>{
        setIsPending(true) //(make sure 100%) in every new request isPending is true by default

        axios.get(endpoint)
        .then(response => {
            setData(response.data)
            setErrors(null)
        })
        .catch(err => {
            setData(null)
            setErrors(err.message)
        })
        .finally(() => setIsPending(false))

    }, [])

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