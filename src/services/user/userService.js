const URL = 'http://localhost:3333/api';

export function registerUser(values) {
    return fetch(`${URL}/register`, {
        // Adding method type
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        // Adding body or contents to send
        body: JSON.stringify({email: values.email, password: values.password})
    })
        .then(res => res.json())
        .then(json => {
            return json
        })
      //TODO : Handle error
}
export  function logInUser(values) {
    console.log(values)
    return fetch(`${URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: values.email, password: values.password})
    })
        .then(res => res.json())
        .then(json => {
            return json
        })
}
export function addFav (jwt, idProduct){

    return fetch(`${URL}/add-fav`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'jwt' : jwt
        },
        body: JSON.stringify({idFav: idProduct})
    })
        .then(res => res.json())
        .then(json => {
            return json
        })
}