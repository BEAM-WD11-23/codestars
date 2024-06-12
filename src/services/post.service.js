import { POSTS_URL } from "../constants/constants";
import useFetch from "../hooks/useFetch";

export function getPosts(){
    const { data:posts, errors, isPending, status, setErrors} = useFetch(POSTS_URL)
    if(status === 404) setErrors('Posts not found')
    return {posts, isPending, errors}
}
