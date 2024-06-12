import { POSTS_URL } from "../constants/constants";
import useFetch from "../hooks/useFetch";

export function getPosts(){
    const { data:posts, errors, isPending, status} = useFetch(POSTS_URL)
    return {posts, isPending, errors, status}
}
