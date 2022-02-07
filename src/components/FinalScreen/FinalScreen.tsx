import React from "react";
import Slider from 'react-slick';
import {Navigation} from "../Navigation/Navigation";
import './FinalScreen.css';

export const FinalScreen: React.FC = () => {
    return (
        <div className={'slider__wrapper'}>
            <Slider>
                <div className={'frame1'}/>
                <div className={'frame2'}/>
                <div className={'frame3'}/>
            </Slider>

            <button className={'out'} />
            {/*<div className={style.panel}>
                <div className={style.final__text}/>
                <button className={classes.out} />
            </div>
            <div className={style.frame} />*/}
            <Navigation linkPrev='/phone' linkNext='/'/>
        </div>
    )
}