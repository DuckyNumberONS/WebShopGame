import { User, UserContextType, UserVerify } from "@/lib/domain/user";
import { createContext, ReactNode, useEffect, useState } from "react";

export const LoginContext = createContext<UserContextType>({
  dataUser: null,
  setUser: () => {},
});

const Login = ({ children }: { children?: ReactNode }) => {
  const [dataUser, setUser] = useState<UserVerify | null>(null);
  const token = dataUser?.accessToken;

  useEffect(() => {
    token &&
      typeof window !== "undefined" &&
      localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <LoginContext.Provider value={{ dataUser, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default Login;
