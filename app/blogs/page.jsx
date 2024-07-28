'use client'

import BlogCard from "../all-cards/BlogCard"

export default function page() {
  return (
    <>
      <div className="container">
                <div className="d-flex justify-content-start">
                    <h1 className="badge" style={{backgroundColor:'var(--blue)', fontSize:'35px'}}>CUET Blogs</h1>
                </div>
                <div className="row d-flex justify-content-center">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </div>
            </div>
    </>
  )
}
