import React from 'react';
import './UserLogin.css';

function UserLogin() {
  return (
    <div className="container">
      <div className="login">
        <div className="login-header">
          <div className="header-text"> Login to Review Places </div>
        </div>
        <div className="login-body">
          <div className="username">
            <div className="username-text">Username</div>
          </div>
          <div className="password">
            <div className="password-text"> Password </div>
          </div>
          <div className="forgot-password"> Forgot Password? </div>
          <div className="or"> OR </div>
        </div>
        <div className="sign-up">
          Don't have an account?
          <span className="signup-text"> Sign up </span>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
