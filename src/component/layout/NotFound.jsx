import React from 'react'

const NotFound = () => {
  return (
    <>
         <div style={{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","height":"100vh"}}>
        <div class="error-body text-center">
          <h1 class="error-title text-danger">404</h1>
          <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
          <p class="text-muted mt-4 mb-4">
            YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
          </p>
          <a
            href="/"
            class="
              btn btn-danger btn-rounded
              waves-effect waves-light
              mb-5
              text-white
            "
            >Back to home</a
          >
        </div>
      </div>
    </>
  )
}

export default NotFound