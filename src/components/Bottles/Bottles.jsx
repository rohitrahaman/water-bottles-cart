import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles,setBottles]= useState([]);

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    useEffect(()=>{
        if(bottles.length>0){
            const storeCart = getStoredCart();
            const saveCart = [];
            for(const id of storeCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle);
                }

            }
            setCart(saveCart);
        }
    },[bottles])

    const handleAddToCart = bottle =>{
        const newcart = [...cart,bottle];
        setCart(newcart);
        addToLS(bottle.id);
    }

    const handleRemove = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }
    return (
        <div>
            <h3>Bottles Are Here: {bottles.length}</h3>
            <Cart cart={cart} handleRemove={handleRemove}></Cart>
            <div className="bottles-container">
            {
                bottles.map( bottle => <Bottle 
                    key={bottle.id}
                    bottle ={bottle}
                    handleAddToCart={handleAddToCart}
                    
                ></Bottle>) 
            }
            </div>
            
        </div>
    );
};

export default Bottles;