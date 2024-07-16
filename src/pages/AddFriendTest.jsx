import axios from "axios"
import { useState } from "react"

function AddFriendTest() {
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    async function handleAddFriend(){
        setIsPending(true)
        const token = localStorage.getItem('token')
        if(!token) return alert('You are not logged in.')

            try {
                const axiosResponse = await axios.post('http://localhost:4800/api/user/friends',
                    { friendId: 'csUser_5b08ed11-e5d1-4903-861f-8d1712da1e1f' }, // data
                    {
                        headers: {'Authorization':`Bearer ${token}`} // headers
                    })
                    setError(null)
                    setMessage('Request sent!')
            }
            catch(axiosError){
                setIsPending(false)
                setMessage(null)
                setError(axiosError.message)
            }
    }
  return (
    <>
    {error && <h3>{error}</h3>}
    {message && <h3>{message}</h3>}
    <div className="flex justify-between items-center border-2 border-slate-800 m-5 p-3">
        <span>John Doe</span>
        <button disabled={isPending} onClick={handleAddFriend} className="bg-cyan-600 text-white p-3 active:bg-cyan-700">Add Friend</button>
    </div>
    </>
  )
}
export default AddFriendTest