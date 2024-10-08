export const SET_ALL_POSTS = "sets all post from api";
export const ADD_NEW_POST = "adds new post to posts";

export function setAllPosts(posts) {
  return {
    type: SET_ALL_POSTS,
    payload: posts,
  };
}

export function addNewPost(post) {
  return {
    type: ADD_NEW_POST,
    payload: post,
  };
}
