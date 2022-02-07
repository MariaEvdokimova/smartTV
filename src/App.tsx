import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Video} from "./components/Video/Video";
import {PhoneAdd} from "./components/PhoneAdd/PhoneAdd";
import {Route, Routes } from 'react-router-dom';
import {FinalScreen} from "./components/FinalScreen/FinalScreen";

export const App: React.FC = () => {

  return (
      <div className='app__wrapper'>
          <Routes >
              <Route path='/' element={<Video />} />
              <Route path='/phone' element={<PhoneAdd />}/>
              <Route path='/final' element={<FinalScreen />}/>
          </Routes >
      </div>
  );
}
