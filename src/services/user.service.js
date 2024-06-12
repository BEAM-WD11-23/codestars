import { USERS_URL } from "../constants/constants"
import useFetch from "../hooks/useFetch"

export function getUsers(){
    const { data:users, errors, isPending, status, setErrors} = useFetch(USERS_URL)
    if(status === 404) setErrors('Users not found.')
    return {users, isPending, errors}
}