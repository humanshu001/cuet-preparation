'use client'

export default function page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
          input::placeholder{
            color:var(--blue)!important;
          }
        `}}></style>
      <div className="container">
        <div className="col-md-12 p-4 mb-3" style={{backgroundColor:'var(--blue)',borderRadius:'8px'}}>
          <h1 className="text-center fw-bold text-white">Contact</h1>
          <h4 className="text-center text-white">Any question or remarks? Just a message away!</h4>
        </div>
        <div className="col-md-12 d-flex">
          <div className="col-md-5 p-4 py-5" style={{backgroundColor:'var(--blue)',borderRadius:'8px'}}>
            
          <h2 className="mx-4 fw-bold text-white">Contact Information</h2>
          <p className="mx-4 text-white">
            Say something to start a conversation.
          </p>
          <ul className="contact-card-contacts text-white">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2" strokeLinecap="round"></rect> </g></svg> info@geetauniversity.edu.in</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#fff"></path> </g></svg>
          +91-22222-22222</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">
        <svg viewBox="0 0 1024 1024" fill="#fff" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill=""></path></g></svg>
          Geeta University, Naultha, Panipat 132145</a></li>
      </ul>
          </div>
          <div className="col-md-7">

            <form className="p-4 px-5">
              <h2 className="fw-bold " style={{color:'var(--blue)'}}>Send us a message</h2>
              <p className="fw-bold" style={{color:'var(--blue)'}}>
                We will get back to you as soon as possible.
              </p>
              <div className="d-flex">
                <input type="text" className="form-control border-2" style={{border:'2px solid var(--blue)'}} placeholder="First Name" />
                <input type="email" className="form-control ms-2 border-2" style={{border:'2px solid var(--blue)'}} placeholder="Last Name" />
              </div>

              <div className="d-flex">
                <input type="email" className="form-control mt-3 border-2" style={{border:'2px solid var(--blue)'}} placeholder="Email" />
                <input type="email" className="form-control ms-2 mt-3 border-2" style={{border:'2px solid var(--blue)'}} placeholder="Phone" />
              </div>

              <textarea className="form-control mt-3 border-2" style={{border:'2px solid var(--blue)',resize:'none'}} placeholder="Message" rows="5"></textarea>

              <div className="d-flex justify-content-end mt-3">
                <button type="submit" className="btn text-white rounded-pill fw-bold" style={{backgroundColor:'var(--blue)'}}>Send Message</button>
              </div>
             
            </form>

          </div>
        </div>
      </div>
    </>
  )
}
