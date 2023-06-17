import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">

            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Important Links</h5>

                       <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>contatc</li>
                        <li>shop</li>
                        <li>Login/Register</li>

                       </ul>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Services</h5>
   <ul>
    <li>fullstack with mern stack</li>
    <li>fullstack with mern laravel</li>
    <li>mobile flutter</li>
    <li>vue with laravel and firebase</li>


   </ul>
                      
                    </div>

                </div>

            </div>


            <div className="text-center p-3"  style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
                © 2023 Copyright:
                <a className="text-dark" href="/"> </a>
            </div>

        </footer></div>
    )
}
