import { Link, Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunc from "./Profile.js";

const About = () => {
  return (
    <div>
      <h1> About Us Page</h1>
      <p>This is About us page of Food Villa</p>
      {/* <Link to="profile">Profile</Link>
       <Outlet/>  */}
      <ProfileClass name={"MjayClass"}/>
      <ProfileFunc name={"MjayFunc"}/>
    </div>
  );
};

export default About;
