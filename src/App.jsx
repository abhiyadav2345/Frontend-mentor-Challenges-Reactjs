import './App.css'
import  ResultCard  from './components/ResultCard.jsx'
import  SummaryCard  from './components/SummaryCard.jsx'

export default function App() {
  return (
    <main>
      <div className="container"></div>

      <div className="container"> 
        <ResultCard/>
        <SummaryCard/>
      </div>
      
    </main>
  )
}
