import { ADD_COMMENT } from "../types/FaceBookType";
export const addComment = (userComment) => ({
  type: ADD_COMMENT,
  userComment,
});
