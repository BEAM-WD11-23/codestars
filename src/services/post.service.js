import axios from "axios";
import { POSTS_ENDPOINT, POSTS_URL } from "../config/constants";
import useFetch from "../hooks/useFetch";

export function usePosts(){
    const { isPending, data:posts, errors, refresh } = useFetch(POSTS_URL)

    return { isPending, posts, errors, refresh }
}

export function createPost(postData){
    return axios.post(POSTS_ENDPOINT, postData)
}

// export function createPost(postData){
//     return fetch(POSTS_ENDPOINT, {
//         method:"POST",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify(postData)
//     })
//     .then(response => {
//         if(response.ok) return response.json()
//         throw new Error('Unable to save post.')
//     })
// }