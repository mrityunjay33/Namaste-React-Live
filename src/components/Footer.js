import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h4 className="font-bold m-2 text-center">Footer</h4>
      <p className="font-bold m-2 text-center">{user.name} - {user.email}</p>
    </>
  );
};

export default Footer;
