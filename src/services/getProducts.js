const URL = 'https://fakestoreapi.com/products?limit=20';

export default function getProducts () {
   return fetch(URL)
        .then(res=>res.json())
        .then(json=>{
           return json
        })
}