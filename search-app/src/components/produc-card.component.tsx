import React from 'react'
import { IProduct } from "../interfaces/product.interface"
// import './producst-card.scss';
export const ProductCardComponent = (product: IProduct) => {
    return (
        // <div className="card withe" style="width: 18rem;">
        <div className="card withe">
            <img src={`http://${product.image}`} className="card-img-top" alt="" />
            <div className="card-body">
                <label className="brand" >{product.brand}</label>
                <p className="description" >{product.description}</p>
            </div>
            {
                (product.offert) ?
                    <div className="offert">
                        <label>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.offert)}</label>
                        <label className="offert__discount">{product.discount}%</label>
                    </div>
                    : ''
            }
            {/* <div className="{'tachado': product.offert != undefined,'price':true}" > */}
            <div className={`${product.offert ? "tachado" : "price"}`} >
                <p>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</p>
            </div >
            <div className="card-body center-items">
                <button type="button" className="btn btn-outline-primary">Agregar</button>
            </div>
        </div >
    )
}