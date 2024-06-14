import { POSTS_ENDPOINT, POSTS_URL } from "../constants/constants";
import useFetch from "../hooks/useFetch";

export function usePosts(){
    const { data:posts, errors, isPending, status} = useFetch(POSTS_URL)
    return {posts, isPending, errors, status}
}

export function createPost(postData){
    return fetch(POSTS_ENDPOINT, {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(postData)
    })
    .then(response => {
        if(response.ok) return response.json()
        throw new Error('Unable to save post.')
    })
}