const getStoredCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if(storeCartString){
        return JSON.parse(storeCartString);
    }
    return [];
}

const storeCart = cart => {
    const cartStringfy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfy);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    storeCart(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx=>idx !== id);
    storeCart(remaining);

}

export {addToLS , getStoredCart , removeFromLS};