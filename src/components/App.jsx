import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// Create Entry Component
// Create props to replaced hardcoded data.
// 3a. Import the emojopedia const.
// 3b. Map through the emojipedia array and render Entry components.
console.log(emojipedia);

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.description}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
