import { User, UserContextType, UserVerify } from "@/lib/domain/user";
import { createContext, ReactNode, useState } from "react";

export const LoginContext = createContext<UserContextType>({
  dataUser: null,
  setUser: () => {},
});

const Login = ({ children }: { children?: ReactNode }) => {
  const [dataUser, setUser] = useState<UserVerify | null>(null);
  return (
    <LoginContext.Provider value={{ dataUser, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default Login;
