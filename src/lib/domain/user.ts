export interface User {
  _id: string;
  username: string;
  address: string;
  email: string;
  admin: boolean;
  password: string;
}
export interface UserVerify {
  accessToken: string;
  userFilter: User;
}
export type UserContextType = {
  dataUser: UserVerify | null;
  setUser: (user: UserVerify | null) => void;
};
