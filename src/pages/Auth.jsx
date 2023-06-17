import React from 'react'

export const Auth = () => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">

                <div className="col-md-8 col-lg-6 col-sm-12">
                    <h2>Login</h2>
                    <form class="row g-3">
                        <div class="col-md-12">
                            <label for="inputCity" class="form-label">Email</label>
                            <input type="text" placeholder='Ener Email' class="form-control" id="inputCity" />
                        </div>
                        
                        <div class="col-md-12">
                            <label for="inputCity" class="form-label">Passowrd</label>
                            <input type="password" placeholder='Enter Password' class="form-control" id="inputCity" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-8 col-lg-6 col-sm-12">
                    <h2>Registration</h2>
                    <form class="row g-3">
                    <div class="col-md-12">
                            <label for="inputCity" class="form-label">Email</label>
                            <input type="text" placeholder='Ener Name' class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputCity" class="form-label">Email</label>
                            <input type="text" placeholder='Ener Email' class="form-control" id="inputCity" />
                        </div>
                        
                        <div class="col-md-12">
                            <label for="inputCity" class="form-label">Passowrd</label>
                            <input type="password" placeholder='Enter Password' class="form-control" id="inputCity" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
