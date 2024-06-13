import { USERS_ENDPOINT } from "../constants/constants"
import useFetch from "../hooks/useFetch"

export function getAllUsers(){
    const { data:users, errors, isPending} = useFetch(USERS_ENDPOINT)
    return {users, isPending, errors}
}

export function getUser(id){
    const { data:user, errors, isPending} = useFetch(USERS_ENDPOINT+"/"+id)
}