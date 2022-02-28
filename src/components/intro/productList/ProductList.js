import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import {products} from "../../../Data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Create & inspire.Its Fatima</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          maiores tempora, illum saepe assumenda ipsum accusamus facilis
          dignissimos. Quod, quo.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item)=>
        <Product key={item.id} img={item.img} link={item.link}/>
        )}
      </div>
    </div>
  );
}

export default ProductList;
