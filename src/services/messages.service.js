import { MESSAGES_ENDPOINT } from "../constants/constants";
import useFetch from "../hooks/useFetch";

export function getAllMessages(){
   const {data:messages, isPending,errors} =  useFetch(MESSAGES_ENDPOINT)
   return {messages, isPending, errors}
}