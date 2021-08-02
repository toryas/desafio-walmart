import React, { useState } from "react";
import { Product } from "../domain/product";
import { getOffer } from "../services/offer.service";
import { ProductCardComponent } from "./produc-card.component";

export const SearchComponent = () => {

    const [productList, setProductList] = useState(new Array<Product>());
    const [searchValue, setSearchValue] = useState('');
    const [searchBy, setSearchBy] = useState('id');
    const [radioId,setRadioId] = useState(true)

    const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const searchOffer = (event: React.FormEvent) => {
        event.preventDefault();
        getOffer(searchBy, searchValue)
            .then((products) => {
                console.log(products);
                setProductList([...products])
            }).catch(() => {
                setProductList([])
            });
    }

    return (
        <div>
            <h1>Buscador</h1>
            <hr />
            <div className="row">
                <div className="col-4">
                    <h4>Dearch form</h4>
                    <hr />
                    <form onSubmit={searchOffer}>
                        <input
                            type="text"
                            placeholder="buscador.."
                            className="form-control"
                            onChange={handleSearchValueChange}
                            value={searchValue}
                            />
                        <input
                            type="radio"
                            value="id"
                            name="gender" 
                            checked={radioId}
                            onClick={()=> {setSearchBy('id');setRadioId(!radioId)}}
                            onChange={()=>{}} 
                            /> id
                        <input
                            type="radio"
                            value="byd"
                            name="gender" 
                            checked={!radioId}
                            onClick={()=> {setSearchBy('byd');setRadioId(!radioId)}}
                            onChange={()=>{}}
                            /> brand and description
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-8">

                    <h4>Resultados</h4>
                    <hr />
                    {
                        productList.length > 0 &&
                        productList.map((productList) => {
                            return <ProductCardComponent
                                key={productList.id}
                                {...productList}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}