import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
      </div> */}
    </div>
  );
};
