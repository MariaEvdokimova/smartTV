import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PhoneAdd} from "./components/PhoneAdd/PhoneAdd";
import {Route, Routes } from 'react-router-dom';
import {FinalScreen} from "./components/FinalScreen/FinalScreen";
import { Video } from './components/Video/Video';
import { Context } from './Context';

export const App: React.FC = () => {

    const [context, setContext] = React.useState(0);

  return (
      <div className='app__wrapper'>
          <Context.Provider value={[context, setContext]}>
          <Routes >
              <Route path='/' element={<Video youtubeID='M7FIvfx5J10'/>} />
              <Route path='/phone' element={<PhoneAdd />}/>
              <Route path='/final' element={<FinalScreen />}/>
          </Routes >
          </Context.Provider>
      </div>
  );
}
