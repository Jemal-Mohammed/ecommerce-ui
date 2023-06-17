import React from 'react'
import '/src/css/landing.css'
import { New_Products } from '../components/New_Products'
export const Landing = () => {

  return (
    <>
    <div id='landing' className='container-fluid'>

      <img style={{height:"73.5vh",width:"100%",objectFit:"cover"}} className='img-fluid' src="/assets/images/landing.jpg" alt="" />
      <div   className="row justify-content-center">
      
        <div style={{position:"absolute",top:"50%",left:"25%"}}  className="col-md-6 is-visible">

          <h1 className='text-light text-center mt-5'>We believe that shopping should be  </h1>
          <h1 className='text-light text-center mt-2'>enjoyable and convenient.</h1>
          <p style={{fontSize:"20px"}} className='text-light text-center mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod cum quam dolor aperiam tenetur vero placeat
            ipsum ex voluptatem.</p>
        </div>
      </div>
    </div>
    <New_Products/>
    </>
  )
}
