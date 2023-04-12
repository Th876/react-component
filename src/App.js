import './App.css';
import WebsiteVisitors from "./components/WebsiteVisitors"
import Sidebar from "./components/Sidebar"
import Reviews from "./components/Reviews"
import AverageRating from "./components/AverageRating"
import SentimentAnalysis from "./components/SentimentAnalysis"

function App() {
  return (
    <div className="App">
        <Reviews/>
        <AverageRating/>
        <SentimentAnalysis />
        <Sidebar/>
        <WebsiteVisitors/>
    </div>
  );
}

export default App;
