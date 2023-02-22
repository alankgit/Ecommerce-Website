import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete } from "../store/reducer";

export const Carti = () => {
  const state = useSelector(state => state.item);
  const dispatch = useDispatch();

  return (
    <>
      {state.map(cartItem => {
        <div className='px-4 my-5 bg-light rounded-3'>
          <div className='container py-4'>
            <button
              className='btn-close float-end '
              aria-level='close'
            ></button>
            <div className='row justify-content-center'>
              <div className='col-md-4'>
                <img src={cartItem.img} height='400px' alt='' />
                <h3>{cartItem.title}</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>;
      })}
    </>
  );
};
