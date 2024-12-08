import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import vitestLogo from '/vitest.svg'
import './App.css'
import { fetchQuote, Quote } from './quote.service'

function App() {
  const [count, setCount] = useState(0)


  const [quote, setQuote] = useState<Quote>();
  useEffect(() => {
    const getQuote = async () => {
      const quote = await fetchQuote();
      setQuote(quote);
    };
    getQuote();
  }, []);
  

  return (
    <>
      <div>
        <a href="https://vitest.dev/" target="_blank">
          <img src={vitestLogo} className="logo" alt="Vitest logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vitest + React 🤝</h1>
      <section>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>Quote of the Day</h2>
        <p>{quote ? quote.quote : 'Loading...'}</p>
      </section>
    </>
  )
}

export default App
