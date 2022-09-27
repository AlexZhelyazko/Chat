import React from 'react';

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
