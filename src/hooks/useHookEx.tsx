import * as React from 'react';

type LoginUser = {
  userId: string;
  userInfo: {
    naem: string;
    projectList: string[];
    lastLogin: string;
  };
} | null;

export type UserInfoContextValue = {
  loginUser: null | LoginUser;
  renewLoginUser: (user: LoginUser) => void;
};

const userInfoDefaultValues: UserInfoContextValue = {
  loginUser: null,
  renewLoginUser: () => {},
};

export const UserInfoContext = React.createContext<UserInfoContextValue>(userInfoDefaultValues);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const [loginUser, setLoginUser] = React.useState<LoginUser>(userInfoDefaultValues.loginUser);

  const renewLoginUser = (loginUserInfo: LoginUser) => {
    setLoginUser(loginUserInfo);
  };

  const providerValue = React.useMemo(
    () => ({
      loginUser,
      renewLoginUser,
    }),
    [loginUser]
  );

  return <UserInfoContext.Provider value={providerValue}>{children}</UserInfoContext.Provider>;
}

export const useUserInfo = () => React.useContext<UserInfoContextValue>(UserInfoContext);

export default useUserInfo;
