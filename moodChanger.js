const emojiArea = document.getElementById("emoji-area");

function handleEmojiChange() {
  emojiArea.textContent = store.getState().emoji;
}

store.subscribe(handleEmojiChange);

document.getElementById("angry-btn").addEventListener("click", () => {
  store.dispatch({ type: "updateEmoji", payload: "⋋_⋌" });
});

document.getElementById("meh-btn").addEventListener("click", () => {
  store.dispatch({ type: "updateEmoji", payload: "(・―・)" });
});

document.getElementById("mf-btn").addEventListener("click", () => {
  store.dispatch({ type: "updateEmoji", payload: "凸(｀0´)凸" });
});

document.getElementById("yawning-btn").addEventListener("click", () => {
  store.dispatch({ type: "updateEmoji", payload: "( ´Ｏ｀)" });
});
