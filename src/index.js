fetch ('https://6638ed6c4253a866a24fb5be.mockapi.io/postsx')
    .then((response) => {
        if(response.ok) {
            return response.json()
        }
        throw new Error('Unable to fetch the Data')
    })
    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.log(error);
    })