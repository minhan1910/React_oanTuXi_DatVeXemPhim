import {ADD_COMMENT} from "../types/FaceBookType";

const stateDefault = {
  comments: [
    {
      name: "MinAn",
      content: "Hi! Yasuo",
      avatar: "https://i.pravatar.cc/150?u=MinAn",
    },
    {
      name: "AnMin",
      content: "Hi! Yasuo",
      avatar: "https://i.pravatar.cc/150?u=AnMin",
    },
  ],
};

const FacebookReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
        state.comments = [...state.comments, action.userComment];
        return {...state};
    }

    default:
      return { ...state };
  }
};

export default FacebookReducer;

//reducer lưu trữ trên ram nên reset là mất
