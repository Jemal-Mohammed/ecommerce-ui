import React, { Fragment } from 'react'
import { FaShoppingCart, FaHeart, FaEye, FaSearch } from 'react-icons/fa';


export const Shop = () => {
    return (
        <Fragment   >

            <div className='container' style={{ minHeight: "60vh", backgroundColor: 'white' }}>
                <div className="row justify-content-center" >
                    <img style={{ height: "30vh", objectFit: 'cover' }} src="/src/assets/images/shop-bg.webp" alt="" />

                </div>
            </div>
            <div className="container">
                <div className="col-md-6 col-lg-8 col-sm-12">

                <div style={{position:"absolute",top:'30vh',left:'40%'}}  className="row justify-content-center">

                <div className="input-group">
                    <div className="form-outline text-light">
                        <input placeholder='Search...' style={{width:'500px',height:"50px"}} type="search" id="form1" className="form-control bg-secondary text-light" />
                         
                    </div>
                    <button type="button" className="btn btn-primary">
                        <FaSearch />
                    </button>
                </div>
                </div>
                </div>
            </div>
            <div className='container   bg-light shadow'>
                <h2 className='text-center  '>Shopping Page</h2>
                <div className="row  ">

                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                        <div className="card bg-light shadow">
                            <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/shop/10.jpg' className="card-img-top img-fluid" alt='{product.name}' />
                            <div className="card-body">
                                <div className="row justify-content-between">
                                    <div className="col-6">

                                        <h5 className="card-title">i-phone camera</h5>
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                        <div className="card">
                            <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/shop/1.jpg' className="card-img-top img-fluid" alt='{product.name}' />
                            <div className="card-body">
                                <div className="row justify-content-between">
                                    <div className="col-6">

                                        <h5 className="card-title">ax camera</h5>
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                        <div className="card bg-light shadow">
                            <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/shop/2.jpg' className="card-img-top img-fluid" alt='{product.name}' />
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                        <div className="card bg-light shadow">
                            <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/shop/3.jpg' className="card-img-top img-fluid" alt='{product.name}' />
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
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
                    <div id='card' className="col-lg-3 col-xs-6 col-md-4 col-sm-6 mb-4 mt-5"  >
                        <div className="card bg-light shadow">
                            <img style={{ height: "230px", objectFit: "contain" }} src='/src/assets/images/shop/4.jpg' className="card-img-top img-fluid" alt='{product.name}' />
                            <div className="card-body">
                                <div className="row justify-content-between">
                                    <div className="col-6">

                                        <h5 className="card-title">Camera m3</h5>
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
                </div>
            </div>
        </Fragment>
    )
}
