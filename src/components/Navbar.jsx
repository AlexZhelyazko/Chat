import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
        <span>Alex</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};
