import React, { useState } from "react";
import funTranslatorAPI from "./apis/funTranslatorAPI";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const getResponse = async () => {
    const response = await funTranslatorAPI.get("/chef?text=srujana");
    setResponse(response.data.contents.translated);
  };

  return (
    <div className="main-container">
      <nav>
        <div>
          <h1>Chef Talk</h1>
        </div>
      </nav>
      <main>
        <textarea
          id="translate-input"
          placeholder="put your message here which you want to convert to chicken language"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <button id="translate-btn" onClick={getResponse}>
          Translate To Chef
        </button>
        <div>Translation will come here 👇</div>
        <div id="translate-output">{response}</div>
      </main>
      <footer>
        <div>
          <div id="footer-header">about</div>
          <p>
            The Swedish Chef is a Muppet character that appeared on The Muppet
            Show. The Swedish Chef does not speak any known language, but his
            nonsense words are so widley interpreted as Swedish-sounding.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
