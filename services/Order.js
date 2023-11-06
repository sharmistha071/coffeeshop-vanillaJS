import { getProductById } from "./Menu.js";

export async function addToCart(id){
    const product = await getProductById(id)
    const results = _app.store.cart.filter(productInCat => productInCat.product.id === id)
    if(results.length === 1){
        // the product is already in cart
        _app.store.cart = _app.store.cart.map(p => p.product.id == id ? {...p, quantity: p.quantity+ 1}: p )
    }else{
        _app.store.cart = [..._app.store.cart, {product, quantity: 1}]
    }
}


export function removeFromCart(id){
    _app.store.cart = _app.store.cart.filter(p=>p.product.id != id)
}