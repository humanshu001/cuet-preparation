'use client'

import React from 'react'
import Avatar from './Avatar'
import Link from 'next/link'

export default function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg mb-5" style={{backgroundColor:'var(--blue)',fontWeight:'600',height:'10vh',boxShadow:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
                <div className="container">
                    <Link className="navbar-brand text-white" style={{fontWeight:'900',fontSize:'35px',color:'var(--orange)'}} href="#">
                        GU
                    </Link>
                    <button className="nav-tog" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <svg fill="#fff" className='navbar-toggler-icon' viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12 5.217c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m20.609 5.217c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m2.609 5.217c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m12 14.608c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m20.609 14.608c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m2.609 14.608c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m12 23.999c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m20.609 23.999c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path><path d="m2.609 23.999c-1.441 0-2.608-1.168-2.608-2.608s1.168-2.608 2.608-2.608c1.441 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608z"></path></g></svg>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                        <div className="navbar-nav"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/syllabus">Syllabus</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mx-3" href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle no-hover text-white mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Avatar txt='HJ' />
                                    Humanshu Jaglan
                                </Link>
                            <ul className="dropdown-menu m-auto py-3 px-2 text-center border-none"  style={{backgroundColor:'var(--blue)',boxSizing:'content-box',borderRadius:'15px',boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',border:'none'}}>
                                <li><Link className="nav-link text-white no-hover" href="/dashboard">Dashboard</Link></li>
                                <li><hr className="dropdown-divider m-0" /></li>
                                <li><Link className="nav-link" style={{color:'var(--orange)'}} href="#">Logout</Link></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
