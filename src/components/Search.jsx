import { collection, getDocs, query, setDoc, where } from 'firebase/firestore';
import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';

export const Search = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', userName));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code = 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combineId =
      currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, 'chats', combineId);
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc, (db, 'chats', combineId), { messages: [] });

        //creare user chats
      }
    } catch (error) {}
    //create user chats
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
