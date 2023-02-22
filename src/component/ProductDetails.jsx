import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Data";
import { useDispatch } from "react-redux";
import { Add, Delete } from "../store/reducer/index";

export const ProductDetails = () => {
  const id = useParams();
  const proDetail = Data.filter(x => x.id == id.id);
  const product = proDetail[0];
  console.log(product);

  const [cart, setCart] = useState("Add to Cart");

  const dispatch = useDispatch();

  const handleCart = product => {
    if (cart === "Add to Cart") {
      dispatch(Add(product));
      setCart("Remove from Cart");
    } else {
      dispatch(Delete(product));
      setCart("Add to Cart");
    }
  };

  return (
    <div>
      <>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-center mx-auto product'>
              <img src={product.img} height='400px' width='400px' alt='' />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
              <h1 className='display-5 fw-bold'>{product.title}</h1>
              <hr />
              <h2 className='my-5'>${product.price}</h2>
              <p className='lead'>{product.desc}</p>
              <button
                className='btn btn-outline-primary'
                onClick={() => handleCart(product)}
              >
                {cart}
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
