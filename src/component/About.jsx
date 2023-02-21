import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              eveniet expedita cupiditate dignissimos ipsa corporis tempora, ad,
              vel excepturi iure commodi inventore ratione at sint. Eaque
              perferendis velit, dicta sequi cumque nam cum placeat culpa quae
              incidunt reiciendis corporis magni! Assumenda ea numquam
              provident, vero exercitationem quos nihil unde similique
              inventore, modi nobis atque a eius excepturi dignissimos
              laboriosam accusamus asperiores ut consequuntur perferendis magnam
              porro! Dolore iste enim cum sapiente perspiciatis est explicabo,
              deleniti, impedit sint a placeat. Assumenda perferendis, odio qui
              dicta id, voluptatem, repellat voluptatibus repudiandae tempora
              quaerat eaque cumque consequuntur sunt! Sunt reprehenderit animi
              tempora ipsam!
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary'>
              Contact Us
            </NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src='/assets/water.jpg' height='400px' width='400px' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
