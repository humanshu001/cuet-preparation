import React from 'react'

export default function BlogCard({id, heading, image, content, date}) {
  return (
    <>
        <div className="card py-3 px-3 m-2 m-4" style={{width:'20rem',backgroundColor:'var(--blue)',color:'white'}}>
            <div className="card-img-top d-flex justify-content-center align-items-center" style={{height:'130px'}}>
            <svg width='35px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='white' d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            </div>
            <h3 className='fw-bold'>Lorem ipsum dolor sit amet Lorem.</h3>
            <p className='small' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam libero natus tempora cupiditate! Unde enim dignissimos, est, ex excepturi facere, aut ipsa delectus accusamus labore placeat sint quam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolor.</p>
            <div className="d-flex">
            <button className='btn rounded-pill text-dark fw-bold' style={{backgroundColor:'white'}}>
                Read More →
            </button>
            </div>
            <p className="small mt-3 mb-0">
                Published on: 12th June 2021
            </p>
        </div>
    </>
  )
}
