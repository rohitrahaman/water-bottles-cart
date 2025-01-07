import PropTypes from 'prop-types'
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const{name,img,price}=bottle;
    return (
        <div className="bottle">
            <h4>Bottle: {name}</h4>
            <img src= {img} alt="" />
            <p>Price: {price} TK</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchas</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
    
}
export default Bottle;