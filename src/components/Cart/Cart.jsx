import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemove}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-cont">
                {cart.map(bottle=> <div key={bottle.id}>
                    <img src={bottle.img} />
                    <button onClick={()=>handleRemove(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Cart;
