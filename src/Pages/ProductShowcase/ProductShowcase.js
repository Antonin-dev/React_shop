import React, {useEffect, useRef, useState} from 'react';
import './ProductShowcase.css';
import inventory from '../../data/inventory';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const ProductShowcase = () => {

    const {id} = useParams();
    const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, "").trim() === id);
    const [nbMugs, setNbMugs] = useState(1);
    const dispatch = useDispatch();
    const addingInfo = useRef();
    let timerInfo;
    let display = true;

    // Function
    const updateMugs = e => {
        setNbMugs(Number(e.target.value))
    }

    const itemAdd = e => {
        e.preventDefault();
        const itemAdd = {
            ...inventory[productClicked],
            quantity: nbMugs
        };
        dispatch({
            type: "ADDITEM",
            payload: itemAdd
        })
        addingInfo.current.innerText = "Ajouté au panier"
        if (display) {
            display = false;
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = ""
                display = true;
            }, 5500)
        }


    }
    //    Nettoyage du timeout
    useEffect(() => {
        return () => {
            clearTimeout(timerInfo);
        }
    })

    return (
        <div className='showcase'>
            <div className="container-img-showcase">
                <img className="img-showcase"
                     src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`}
                     alt=""/>
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix : {inventory[productClicked].price} €</p>
                <form onSubmit={itemAdd}>
                    <label htmlFor="quantity">Quantité</label>
                    <input type="number" id="quantity" value={nbMugs} onChange={updateMugs}/>
                    <button>Ajouter au panier</button>
                    <span ref={addingInfo} className="adding-info"></span>
                </form>
            </div>
        </div>
    );
};

export default ProductShowcase;
