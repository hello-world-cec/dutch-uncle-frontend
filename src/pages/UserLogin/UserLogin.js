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
            <div className="username-text" contenteditable="true">
              Username
            </div>
          </div>
          <div className="password">
            <div className="password-text" contenteditable="true">
              Password
            </div>
          </div>
          <div className="forgot-password"> Forgot Password? </div>
          <div className="login-button">
            <div className="login-text"> LOGIN </div>
          </div>
          <div className="or"> or </div>
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
