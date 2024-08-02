import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
        <div className="container-fluid p-3 login-background">

          <div className="p-5 col-md-5 col-sm-8 login-card"style={{backgroundColor:'var(--blue)'}}>
                <h1 className='text-center text-white fw-bold fs-2 mb-5'>Welcome back! Start your learning now.</h1>
                <label htmlFor="" className='text-white px-2 fs-5'>Email</label>
                <input className='form-control mb-4 p-2 fs-5' style={{backgroundColor:'var(--blue)',color:'white',fontWeight:'600'}} type="text" />
                <label htmlFor="" className='text-white px-2 fs-5'>Password</label>
                <input className='form-control mb-4 p-2 fs-5' style={{backgroundColor:'var(--blue)',color:'white',fontWeight:'600'}} type="password" />
                <div className="text-white mb-2 px-4 card-message">
                Don't have an account? <Link href='/auth/register' className='text-white'>Sign up</Link>
                </div>
                <div className="d-flex justify-content-center">
                <button className='btn btn-light rounded-pill px-4 py-3 col-md-4 fw-bold fs-4' style={{color:'var(--blue)'}}>Sign in</button>
                </div>
          </div>
        </div>
        <div style={{height:'34vh'}}></div>
    </>
  )
}
