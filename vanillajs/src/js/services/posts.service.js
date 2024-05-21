
export function getPosts(){
    // return
    const postPromise = fetch('https://6638ed6c4253a866a24fb5be.mockapi.io/posts')
    .then((response) => {
        if(!response.ok) throw new Error('Unable to get data')
        return response.json()
    })

    return postPromise;
}

export function getUsers(){
    return fetch('https://6638ed6c4253a866a24fb5be.mockapi.io/users')
    .then(response => {
        if(!response.ok) throw new Error('Unable to get data')
        return response.json()
    })
}

export function getData(url){
    return fetch(url)
    .then(res => res.json())
}