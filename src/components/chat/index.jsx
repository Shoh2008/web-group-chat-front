import React, { useEffect, useState } from "react";
import { Block, Userbar } from "./style";
import Users from "../users";
import Messages from "../messages";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../style";
import { getUsers } from "../../redux/reducer/users";

function Index() {
  const [keyMenu, setKeyMenu] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
    if (localStorage.getItem("chatUserID") === null) {
      navigate("sign-up");
    }
  }, []);

  const {
    users: { me },
  } = useSelector((state) => state);

  function toggleMenu() {
    setKeyMenu((p) => !p);
  }

  return (
    <Block>
      <Button onClick={toggleMenu} className="menuBtn">
        <i className={keyMenu === false ? "bi bi-list" : "bi bi-x"}></i>
      </Button>
      <div
        className="menu"
        style={
          keyMenu === true ? { marginLeft: "0" } : { marginLeft: "-380px" }
        }
      >
        <Userbar>
          <div className="profile">{me?.username?.charAt(0)?.toUpperCase()}</div>
          <Button onClick={() => navigate("/sign-in")} className="signin">
            Sign In
          </Button>
        </Userbar>
        <Users setKeyMenu={setKeyMenu} keyMenu={keyMenu} />
      </div>
      <Messages keyMenu={keyMenu} />
    </Block>
  );
}

export default Index;
