import { Routes, Route, Link, Navigate } from 'react-router-dom';
export const ProtectedRoute = ({  children }) => {
    const user = localStorage.getItem("tokens")
    if (user) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };