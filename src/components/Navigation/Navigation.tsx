import React from "react";
import classes from './Navigation.module.css'
import {Link} from "react-router-dom";

type PropsType = {
    linkPrev: string,
    linkNext: string
}

export const Navigation: React.FC<PropsType> = ({linkPrev, linkNext}) => {
    return (
        <div className={classes.nav}>
            {linkPrev !== '/final' && <Link className={classes.nav__prev} to={linkPrev}>Prev</Link>}
            {linkNext !== '/' && <Link className={classes.nav__next} to={linkNext}>Next</Link>}
        </div>
    )
}