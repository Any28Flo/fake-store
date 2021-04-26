const URL = 'http://localhost:3333/api';

export default function registerUser(values) {
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
      /*  .catch(e=>{
            return e
        })*/
}