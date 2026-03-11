import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for saved user data on component mount
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // Check for admin credentials
    if (email === 'areezshoaib@gmail.com' && password === 'User@123!') {
      const adminUser = {
        email: email,
        role: 'admin',
        name: 'AREEZ KORAI'
      };
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return { success: true, role: 'admin' };
    } else if (email && password) {
      // Regular user login
      const regularUser = {
        email: email,
        role: 'customer',
        name: email.split('@')[0].toUpperCase()
      };
      setUser(regularUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(regularUser));
      return { success: true, role: 'customer' };
    }
    return { success: false };
  };

  const signup = (userData, isPromoMember = false, promoCode = '') => {
    // For signup, always create a customer role
    const customerUser = {
      email: userData.email,
      role: 'customer',
      name: userData.fullName || userData.email.split('@')[0].toUpperCase(),
      isPromoMember: isPromoMember,
      promoCode: promoCode
    };
    setUser(customerUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(customerUser));
    return { success: true, role: 'customer' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
