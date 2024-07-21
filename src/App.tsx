import { useState } from 'react'
import { requestToGemini } from "./util/gemini";
import { Button } from "./components/Button";


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
      <div className="w-full min-h-screen flex justify-center">
        <div className="w-4/5 flex flex-col items-center p-10 gap-5">
          <h1 className="text-2xl font-bold">Type Message</h1>
          <form className="flex gap-10 w-full" onSubmit={handleSubmit}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} className="border-2 border-gray-400 rounded-xl w-full p-5" />
            <Button type="submit">전송</Button>
          </form>
          <p>
            {response}
          </p>
        </div>
      </div>
    </>
  )
}

export default App
