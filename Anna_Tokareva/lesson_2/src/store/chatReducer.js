import { handleActions } from "redux-actions";
import { loadChats, addMessage, addChat } from "./chatAction";

const defaultState = {
  chats: {}
};

export default handleActions(
  {
    [loadChats]: state => {
      return {
        ...state,
        chats: {
          1: {
            name: "Чат 1",
            messages: [
              { name: "Иван", content: "Привет!" },
              { name: "Петр", content: "Привет, как дела?" },
              { name: "Иван", content: "Хорошо, спасибо." }
            ]
          },
          2: {
            name: "Чат 2",
            messages: [
              { name: "Иван", content: "Привет!" },
              { name: "Иван", content: "Как дела?" }
            ]
          },
          3: {
            name: "Чат 3",
            messages: []
          }
        }
      };
    },
    [addMessage]: (state, { payload: { id, name, content } }) => {
      return {
        ...state,
        chats: {
          ...state.chats,
          [id]: {
            name: state.chats[id].name,
            messages: [...state.chats[id].messages, { name, content }]
          }
        }
      };
    },
    [addChat]: (state, { payload: { name } }) => {
      const id = Object.keys(state.chats).length + 1;
      return {
        ...state,
        chats: { ...state.chats, [id]: { name: name, messages: [] } }
      };
    }
  },
  defaultState
);
