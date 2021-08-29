const INITIAL_STATE = { emoji: "" };

function emojiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "updateEmoji":
      return { ...state, emoji: action.payload };
  }
  return state;
}

const store = Redux.createStore(emojiReducer);
