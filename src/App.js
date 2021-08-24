import React, { useState } from "react";
import "./styles.css";
import background from "../public/images/emojis.jpg";

var emojiDictionary = {
  "😀": "happy",
  "😍": "Heart Eyes",
  "😔": "sad",
  "😳": "disbelief",
  "❤️": "love",
  "🤣": "Rolling on the Floor Laughing",
  "😮‍💨": "Face Exhaling",
  "🥵": "Hot Face",
  "🤢": "Disgust",
  "✨": "Sparkles",
  "🔥": "fire",
  "🤑": "rich",
  "🤐": "No comments",
  "😎": "Smart",
  "🧐": "Oh really",
  "😰": "Anxious"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Emojis meaning will appear here");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    setEmoji(userInput);

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmoji(emoji);
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input placeholder="Search your emoji" onChange={emojiInputHandler} />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      <div class="box">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onMouseEnter={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
