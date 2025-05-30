"use client";
import { checkTokenAuth } from "@/actions/authActions";
import { createContext, useEffect, useReducer } from "react";

const authState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);
  //   const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const user = await checkTokenAuth();

      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      dispatch({ type: "LOGOUT" });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // Login function
  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  // Logout function
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
