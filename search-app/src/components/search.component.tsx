import React, { useState } from "react";
import { Product } from "../domain/product";
import { getOffer } from "../services/offer.service";
import { ProductCardComponent } from "./produc-card.component";

export const SearchComponent = () => {

    const [productList, setProductList] = useState(new Array<Product>());
    const [searchValue, setSearchValue] = useState('');

    const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const searchOffer = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchValue.length < 1) return;
        getOffer(searchValue)
            .then((products) => {
                console.log(products);
                setProductList([...products])
            }).catch(() => {
                setProductList([])
            });
    }

    return (
        <div>
            <div className="container">
                <br />
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm" onSubmit={searchOffer}>
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless"
                                        type="search"
                                        placeholder="Escriba el ID  o Palabra a buscar"
                                        onChange={handleSearchValueChange}
                                        value={searchValue}
                                    />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-md-center result-background m-1">
                    {
                        productList.length > 0 &&
                        productList.map((productList) => {
                            return (
                                <ProductCardComponent
                                    key={productList.id}
                                    {...productList}
                                />
                            )
                        })
                    }
                    {
                        productList.length == 0 &&
                        <div className="product-card withe">
                            No hay productos que mostrar
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}