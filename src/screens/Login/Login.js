import React from 'react';
import LoginForm from '../../containers/Login/LoginForm/LoginForm';
import './styles.scss';

function Login() {
  return (
    <>
    <div className="bg-default">
      <div className='main-content'>
      <div className='header bg-gradient-primary py-7'>
        <div className="separator separator-skew separator-bottom zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
        </div>
      </div>
        <div className='container mt--8 pb-5'>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary shadow border-0">
                <div className="card-header bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                    LOGIN
                    <br></br>
                    <span>
                      Use default credentials: test / pass
                    </span>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <LoginForm /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
    </>
    
  );
}

export default Login;
