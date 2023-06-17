import React from 'react'
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import '/src/css/newproduct.css'
 
export const New_Products = () => {
    return (
        <>
      

        <div className='container mt-5'>
            <h2 className='text-center mt-5'>Latest Products</h2>
            <div className="row mt-3">

                <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                    <div className="card bg-light shadow">
                        <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/10.png' className="card-img-top img-fluid" alt='{product.name}' />
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-6">

                                    <h5 className="card-title">i-phone</h5>
                                </div>
                                <div className="col-6">
                                    <p>$45</p>
                                </div>
                            </div>
                            <div className="container">

                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <FaShoppingCart className='text-success' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaHeart className='text-danger' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaEye className='text-primary' style={{ fontSize: "20px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id='card'  className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                    <div className="card">
                        <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/12.png' className="card-img-top img-fluid" alt='{product.name}' />
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-6">

                                    <h5 className="card-title">Laptop</h5>
                                </div>
                                <div className="col-6">

                                    <p>$55</p>
                                </div>

                            </div>
                            <div className="container">

                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <FaShoppingCart className='text-success' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaHeart className='text-danger' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaEye className='text-primary' style={{ fontSize: "20px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id='card'  className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                    <div className="card bg-light shadow">
                        <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/11.png' className="card-img-top img-fluid" alt='{product.name}' />
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-6">

                                    <h5 className="card-title">Galaxy A12</h5>
                                </div>
                                <div className="col-6">

                                    <p>$211</p>
                                </div>

                            </div>
                            <div className="container">

                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <FaShoppingCart className='text-success' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaHeart className='text-danger' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaEye className='text-primary' style={{ fontSize: "20px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id='card'  className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                    <div className="card bg-light shadow">
                        <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/23.png' className="card-img-top img-fluid" alt='{product.name}' />
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-6">

                                    <h5 className="card-title">Galaxy m3</h5>
                                </div>
                                <div className="col-6">

                                    <p>$366</p>
                                </div>

                            </div>
                            <div className="container">

                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <FaShoppingCart className='text-success' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaHeart className='text-danger' style={{ fontSize: "20px" }} />
                                    </div>
                                    <div className="col-4">
                                        <FaEye className='text-primary' style={{ fontSize: "20px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
