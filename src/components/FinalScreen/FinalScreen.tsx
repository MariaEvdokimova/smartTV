import React from "react";
import {Navigation} from "../Navigation/Navigation";
import style from "../PhoneAdd/PhoneAdd.module.css";
import classes from './FinalScreen.module.css';

export const FinalScreen: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.panel}>
                <div className={style.final__text}/>
                <button className={classes.out} />
            </div>
            <div className={style.frame} />
            <Navigation linkPrev='/phone' linkNext='/'/>
        </div>
    )
}