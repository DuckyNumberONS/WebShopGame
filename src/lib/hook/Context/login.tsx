import { User, UserContextType, UserVerify } from "@/lib/domain/user";
import { createContext, ReactNode, useEffect, useState } from "react";

export const LoginContext = createContext<UserContextType>({
  dataUser: null,
  setUser: () => {},
});

const Login = ({ children }: { children?: ReactNode }) => {
  const [dataUser, setUser] = useState<UserVerify | null>(null);
  useEffect(() => {
    const token = JSON.stringify(dataUser?.accessToken);
    localStorage.setItem("token", token ? token : "");
  });

  return (
    <LoginContext.Provider value={{ dataUser, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default Login;
