import { createContext } from "react";

const UserContext = createContext({
  users: {
    name: "DummyUser",
    email: "Email@gmail.com",
  },
});

UserContext.displayName="UserContext";
export default UserContext;
