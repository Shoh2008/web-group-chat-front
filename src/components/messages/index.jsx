import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import "antd/dist/antd.css";
import { ChatBox } from "./style";
import { Button, Input } from "../../style";
import {
  deleteMessage,
  getMessages,
  sendMessage,
} from "../../redux/reducer/messages";
import { getUsers } from "../../redux/reducer/users";

function Messages({ keyMenu }) {
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const {
    users: { me },
    messages: { messages },
  } = useSelector((state) => state);

  useEffect(() => {
    setInterval(() => {
      dispatch(getMessages());
    }, 3000);
    dispatch(getUsers());
  }, []);

  function send() {
    if (message !== "") {
      dispatch(
        sendMessage({
          message: message,
          author: me?.username,
        })
      );
      setmessage("");
    }
  }

  function removeMessages(item) {
    dispatch(deleteMessage(item));
  }

  return (
    <ChatBox
      style={
        keyMenu === true ? { width: "calc(100% - 380px)" } : { width: "100%" }
      }
    >
      <div className="line-top">
        <span>
          <i className="bi bi-people" />
        </span>
        <div className="title">
          <b>Chat For My Friends</b>
        </div>
      </div>
      <div className="messages">
        {messages?.map((item, index) => (
          <div
            key={index}
            className={item?.author === me?.username ? "right" : "left"}
          >
            <span>
              <div className="title">
                <Button
                  className="x-delete"
                  style={
                    item?.author !== me?.username ? { display: "none" } : {}
                  }
                  onClick={() => removeMessages(item)}
                >
                  🔪
                </Button>
                <p>{item?.time}</p>
                <p>{item?.author}</p>
              </div>
              {item?.message?.substring(0, 8) === "https://" ? (
                <Image.PreviewGroup>
                  <Image src={item?.message} />
                </Image.PreviewGroup>
              ) : (
                item?.message
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="line-bottom">
        <Input
          type="text"
          placeholder="Type here to send..."
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <Button onClick={send}>
          <i className="bi bi-telegram"></i>
        </Button>
      </div>
    </ChatBox>
  );
}

export default Messages;
