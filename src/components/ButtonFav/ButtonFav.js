import React from 'react';
import {message} from "antd";
import {useStateValue} from "../../context/StateProvider";
import {addFav} from "../../services/user/userService";
import {useHistory} from "react-router-dom";

const ButtonFav = ({id})=>{
    const [{ favs, jwt}] = useStateValue();
    const history = useHistory();

    const isFav = favs?.some( favId => favId === id)

    const [label, emoji] = isFav ? ['Remove product', '❌' ] : ['Add product', '❤️'] ;

    const handleFav= async(idProduct)=>{
        if(!jwt) return history.push('/register')
        const addSuccess =await addFav(jwt,idProduct)
        if(addSuccess){
            message.success('Added successfully',3 );
        }
    }

    return (
        <button onClick={()=>handleFav(id)}>
            <span aria-label={label} >
                {emoji}
            </span>
        </button>
    );
}

export default ButtonFav;