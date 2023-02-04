import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    me: {},
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
      action.payload.map((item) => {
        if (item.id === localStorage.getItem("chatUserID")) {
          state.me = item;
        }
      });
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("chatUserID", action.payload.id);
    },
    editUser: (state, action) => {
      state.users.map((item) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
      });
    },
  },
});

export const getUsers = () =>
  apiCall({
    url: "/users",
    method: "get",
    onSuccess: "users/getUsers",
  });

export const addUser = (data) =>
  apiCall({
    url: "/users",
    method: "post",
    onSuccess: "users/addUser",
    data,
  });

export const editUser = (data) =>
  apiCall({
    url: "/users/" + data.id,
    method: "put",
    onSuccess: "users/editUser",
    data,
  });

export default users.reducer;
