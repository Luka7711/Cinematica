import React, { useState } from "react";
import LinkItems from "./Links/LinkItems";

const Navigation = ({ userId }) => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState(null);

  // if use not auth return nav with login and sign up

  return (
    <div className="ui inverted menu nav" style={{ margin: "0" }}>
      <LinkItems auth={auth} />
    </div>
  );
};

export default Navigation;
