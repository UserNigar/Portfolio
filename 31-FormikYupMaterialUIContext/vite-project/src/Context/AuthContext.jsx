import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  const login = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    setIsLoggedIn(true);
    toast.success("Uğurla daxil oldunuz!");
  };

  const register = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    setIsLoggedIn(true);
    toast.success("Qeydiyyat uğurla tamamlandı!");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    toast.info("Çıxış edildi.");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
