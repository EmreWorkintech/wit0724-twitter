import { ADD_NEW_POST, SET_ALL_POSTS } from "../actions/postActions";

const initialState = {
  posts: [],
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POSTS:
      return { posts: action.payload };
    case ADD_NEW_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
}
