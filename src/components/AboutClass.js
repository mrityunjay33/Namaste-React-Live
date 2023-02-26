import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class AboutClass extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    console.log(UserContext);
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile />
        {/* <ProfileFunctionalComponet name={"Dummy"}/> */}
      </div>
    );
  }
}

export default AboutClass;
