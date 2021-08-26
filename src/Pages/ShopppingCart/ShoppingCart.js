import React from 'react';
import './ShoppingCart.css';
import {useDispatch, useSelector} from "react-redux";


const ShoppingCart = () => {

    const storeState = useSelector(state => state);
    const dispatch = useDispatch();
    const handleChange = (event, id) => {
        const indexItem = storeState.cart.findIndex(obj => obj.id === id);
        const objUpdate = {...storeState.cart[indexItem], quantity: Number(event.target.value)}
        dispatch({
            type: "UPDATEITEM",
            payload: objUpdate
        })
    }

    let total = 0;
    if (storeState.cart.length !== 0){
        for (const item of storeState.cart) {
            total += item.price * item.quantity;
        }
    }

    return (
        <div className="global-container">
            <p className="heading-cart">
                <ul className="cart-list">
                    {storeState.cart.map((item) => (
                        <li key={item.id}>
                            <img className="img-showcase"
                                 src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
                                 alt=""/>
                            <div className="bloc-cart-infos">
                                <h4>{item.title}</h4>
                                <p>Price : {item.price} €</p>
                            </div>
                            <div className="bloc-input">
                                <label htmlFor="quantity-input">Quantité</label>
                                <input onChange={e => handleChange(e, item.id)} id="quantity-input" type="number" value={item.quantity}/>
                            </div>
                        </li>)
                    )}
                </ul>
                <p className="total-price">Total : {total.toFixed(2)} €</p>
                <button className="btn-cart">Proceder au paiement</button>
            </p>
        </div>
    );
};

export default ShoppingCart;
