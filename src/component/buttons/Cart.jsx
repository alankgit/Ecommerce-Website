import React from "react";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  return (
    <div>
      <NavLink to='/cart' className='btn btn-outline-primary ms-4 px-2'>
        Cart
        <span className='fa fa-shopping-cart'>0</span>
      </NavLink>
    </div>
  );
};
