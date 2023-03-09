import './App.css'
import { ResultCard, SummaryCard } from "./components/result-and-summarycard/index"


export default function App() {
  return (
    <main>
      <div className="container" style={{ height: "20vh" }}></div>

      <div className="container">
        <ResultCard />
        <SummaryCard />
      </div>

    </main>
  )
}
