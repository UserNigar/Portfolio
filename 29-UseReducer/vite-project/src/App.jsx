import React, { useReducer, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import { MdDeleteForever, MdOutlineDriveFileRenameOutline } from 'react-icons/md';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE': 
      return [...state, action.value];
    case 'UPDATE':
      return state.map(user => 
        user.id === action.value.id ? action.value : user
      );
    case 'DELETE':
      return state.filter(user => user.id !== action.value);
    case 'RESET': 
      return [];
    default:
      return state;
  }
};

const App = () => {
  const [users, dispatch] = useReducer(reducer, [], () => {
    return JSON.parse(localStorage.getItem('users')) || [];
  });

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleEdit = (user) => {
    setEditUser(user); 
    setName(user.name); 
    setSurname(user.surname); 
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', value: id });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      dispatch({ 
        type: 'UPDATE', 
        value: { 
          id: editUser.id, 
          name, 
          surname
         }
      });
    } else {
      dispatch({ 
        type: 'CREATE', 
        value: { 
          id: uuidv4(), 
          name, 
          surname }
      });
    }
    setName('');
    setSurname('');
    setEditUser(null);
  };

  return (
    <div className="app">
      <h1>Istifadeciler</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Soyad"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">
          {editUser ? "Yenilə" : "Əlavə et"}
        </button>
      </form>

      <div className="userList">
        {users.map(user => (
          <div key={user.id} className="userItem">
            <p>
              İstifadəçi adı: {user.name} <br />
              İstifadəçi soyadı: {user.surname}
            </p>
           <div className="btn_area">
           <button onClick={() => handleEdit(user)} className="editBtn"><MdOutlineDriveFileRenameOutline/></button>
           <button onClick={() => handleDelete(user.id)} className="deleteBtn"><MdDeleteForever /></button>
           </div>
          </div>
        ))}
      </div>

      <button onClick={handleReset} className="resetBtn">Hamısını Sil</button>
    </div>
  );
};

export default App;
