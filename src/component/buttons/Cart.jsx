import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const state = useSelector(state => state.item);

  return (
    <div>
      <NavLink to='/cart' className='btn btn-outline-primary ms-4 px-2'>
        Cart
        <span className='fa fa-shopping-cart'>{state.length}</span>
      </NavLink>
    </div>
  );
};
