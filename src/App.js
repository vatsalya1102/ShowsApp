import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import LoadingBar from 'react-top-loading-bar';
import { useState, useEffect } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState();

  const updateMovies = async () => {
    setProgress(10);
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setMovies(parsedData)
    setProgress(100)
  }

  useEffect(() => {
    updateMovies();
    console.log(selected);
    // eslint-disable-next-line
  }, [selected])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<Home movies={movies} selected={selected} setSelected={setSelected} setProgress={setProgress} />} />
          <Route exact path='/details' element={<Details selected={selected} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
