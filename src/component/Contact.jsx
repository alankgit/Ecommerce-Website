import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='col-12 text-center py-4 my-4'>
          <h1>Have Some Question</h1>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5 d-flex justify-content-center'>
          <img src='/assets/water.jpg' height='450px' width='450px' alt='' />
        </div>
        <div className='col-md-6'>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-3'>
            <label for='exampleFormControlTextarea1' className='form-label'>
              ....
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
          <button className='btn btn-outline-primary'>Send</button>
        </div>
      </div>
    </div>
  );
};
