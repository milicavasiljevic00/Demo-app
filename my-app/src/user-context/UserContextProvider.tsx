import { useContext, useState, useEffect } from "react";
import { UserContent, UserContentState } from "./UserContent";
import { UserHttp } from "../api/http-services/users.http";
import { USER_LOGGED_KEY } from "../constants/Constants";
import { UserContext } from "./UserContext";

const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }: any) => {
  const userHttp = new UserHttp();
  const [user, setUser] = useState<UserContent | null>(null);

  const fetchData = async (): Promise<UserContent | null> => {
    try {
      const response = await userHttp.getUserMe();
      return response.data;
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  };

  const fetchAndSet = () => {
    fetchData()
      .then((userData) => {
        if (userData) {
          setUser(userData);
        } else {
          setUser(UserContentState);
        }
      })
      .catch((error) => {
        setUser(UserContentState);
        console.log(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem(USER_LOGGED_KEY)) {
      fetchAndSet();
    }
  }, []);

  function logIn(user: UserContent) {
    setUser(user);
  }

  function logOut() {
    setUser(UserContentState);
    localStorage.removeItem(USER_LOGGED_KEY);
  }

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
export { useUserContext, UserContextProvider };
