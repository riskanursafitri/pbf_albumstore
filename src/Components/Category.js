import React, { useState } from "react";
import Categories from "./Categories";

const Category = () => {
    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
    return (
        <>
            <h1 className="text-center text-info">Let's Shop!</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Pria')}>Pria</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Wanita')}>Wanita</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Anak-anak')}>Anak-anak</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Sepatu')}>Sepatu</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Tas')}>Tas</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => setData(Categories)}>ALL</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values) => {
                                const { id, tittle, price, image } = values;
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" key={id}>
                                            <div class="card">
                                                <img src={image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card -title">{tittle}</h5>
                                                    <p>Price :{price}</p>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button class="btn btn-dark">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;
