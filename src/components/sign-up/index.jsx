import React, { useState, useEffect } from "react";
import { Button, Input } from "../../style";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { addUser } from "../../redux/reducer/users";

function SignUp() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submit() {
    if (user.username && user.lastname && user.password) {
      localStorage.setItem("chatUserID", "");
      dispatch(addUser(user));
      navigate("/");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("chatUserID")) {
      navigate("/");
    }
  }, []);

  return (
    <Block>
      <Box>
        <h2>Sign Up</h2>
        <Input
          placeholder="Name"
          onChange={(e) => setUser((p) => ({ ...p, username: e.target.value }))}
        />
        <Input
          placeholder="Last Name"
          onChange={(e) => setUser((p) => ({ ...p, lastname: e.target.value }))}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
        />
        <div>
          <Button onClick={() => navigate("/sign-in")} className="signinbtn">
            Sign In
          </Button>
          <Button onClick={submit}>Sign Up</Button>
        </div>
      </Box>
    </Block>
  );
}

export default SignUp;
