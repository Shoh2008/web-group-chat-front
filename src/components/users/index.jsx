import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserBox } from "./style";
import Loader from "../loader";
import { Fade } from "react-reveal";
import { getUsers } from "../../redux/reducer/users";
import { Button, Input } from "../../style";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const {
    users: { users, me },
  } = useSelector((state) => state);

  return (
    <UserBox>
      <div className="users">
        {users.length === 0 ? (
          <Loader />
        ) : (
          users.map((item, index) => (
            <Fade left key={index}>
              <div className={item?.id === me?.id ? "user active" : "user"}>
                <span>{item?.username?.charAt(0)?.toUpperCase()}</span>
                <div className="title">
                  <b>{item?.username}</b>
                  <p>{item?.lastname}</p>
                </div>
              </div>
            </Fade>
          ))
        )}
      </div>
    </UserBox>
  );
}

export default Users;
