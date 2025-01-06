import './Bottle.css'
const Bottle = ({bottle}) => {
    const{name,img,price}=bottle;
    return (
        <div className="bottle">
            <h4>Bottle: {name}</h4>
            <img src= {img} alt="" />
            <p>Price: {price} TK</p>
        </div>
    );
};

export default Bottle;