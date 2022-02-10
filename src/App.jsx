import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Library from './pages/Library/library';
import Header from './components/header/header';
import Home from './pages/Home/home';
import { fetchData } from './data/fetchData';
import { useDispatch } from 'react-redux';
import { setGameList } from './redux/actions';
import DownloadsPopUp from './components/downloadsPopUp/downloadsPopUp';

function App() {

  const dispatch = useDispatch()

  fetchData()
    .then((data) => {
      dispatch(setGameList(data.data))
    })

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
      </Routes>
      <DownloadsPopUp />
    </React.Fragment>
  );
}

export default App;
