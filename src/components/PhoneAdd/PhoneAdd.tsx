import React from 'react';
import style from './PhoneAdd.module.css';
import {PhoneAddForm} from "./PhoneAddForm/PhoneAddForm";
import {Navigation} from "../Navigation/Navigation";

export const PhoneAdd: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.panel}>
                <PhoneAddForm />
            </div>
            <div className={style.frame} />
            <Navigation linkPrev='/' linkNext='/final'/>
        </div>
    )
}