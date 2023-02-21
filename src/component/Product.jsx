import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../Data";

const Product = () => {
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Product</h1>
            <hr />
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-around'>
            {Data.map(item => (
              <div
                className='card my-5 py-5'
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img src={item.img} className='card-img-top' alt={item.title} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='lead'>${item.price}</p>
                  <Link
                    to={`/product/${item.id}`}
                    className='btn btn-outline-primary'
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
