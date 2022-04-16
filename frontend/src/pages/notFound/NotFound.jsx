import React from 'react'
import { Link } from 'react-router-dom'
// import Footer from '../../components/footer'
// import Header from '../../components/Header'

function NotFound() {
  return (
    <>
      {/* <Header /> */}
      
      <div className="not-found vh-100 d-flex align-items-center justify-content-center p-3">
        <div className="content text-center">
          <h1 className='display-1'>404</h1>
          <p><strong className='text-danger'>Opps!</strong> The page you are looking for doesn't exist or an another error occurred.</p>
          <Link to="/" className='btn text-primary mt-4'> <strong>Back to Home</strong> </Link>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  )
}

export default NotFound