const URL = 'https://fakestoreapi.com/products?limit=5';

export default function getProducts () {
   return fetch(URL)
        .then(res=>res.json())
        .then(json=>{
           return json
        })
}