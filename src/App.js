import logo from './logo.svg';
import './App.css';
import './index.css';
import ResultSummary from './components/results/ResultSummary';


function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full md:h-screen w-full md:px-4 mx-auto md:max-w-[750px] bg-white">
      <ResultSummary />
    </div>
  );
}

export default App;
