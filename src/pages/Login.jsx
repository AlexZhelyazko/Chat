import React from 'react';
import Add from '../img/addAvatar.png';

export const Login = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};
