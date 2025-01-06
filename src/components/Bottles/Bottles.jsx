import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles,setBottles]= useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
    return (
        <div>
            <h3>Bottles Are Here: {bottles.length}</h3>
            <div className="bottles-container">
            {
                bottles.map( bot => <Bottle 
                    key={bot.id}
                    bottle ={bot}
                ></Bottle>) 
            }
            </div>
            
        </div>
    );
};

export default Bottles;