import { useState } from 'react'
import { requestToGemini } from "./util/gemini";


function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await requestToGemini(text);
    setResponse(res);
  }

  return (
    <>
      <h1>Type Message</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">전송</button>
      </form>
      <p>
        {response}
      </p>
    </>
  )
}

export default App
