import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import classes from "./Video.module.css";
import {Navigation} from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import { Context } from '../../Context';

type PropsType = {
    youtubeID: string
}

export const Video: React.FC<PropsType> = ({youtubeID}) => {
    const [IsBannerOpen, EditIsBannerOpen] = useState(false);
    const [context, setContext] = React.useContext<any>(Context);

    const [videoTime, editVideoTime] = useState(0);

    const initialize = (e: any) => {
        updateTimerDisplay(e.target);
        setInterval(function () {
            updateTimerDisplay(e.target);
        }, 1000)
    }

    const updateTimerDisplay = (player: any) => {
        setContext(player.getCurrentTime())
    }

    const videoOnPlay = () => {
        if (!IsBannerOpen) {
            setTimeout(() => EditIsBannerOpen(true), 5000);
        }
    }

    useEffect(()=> {
        editVideoTime(context)
    },[])

    return (
        <div>
            <YouTube className={classes.video} videoId={youtubeID}
                 opts={
                     {
                         height: '1280',
                         width: '720',
                         playerVars: {
                             'autoplay': 1,
                             start: videoTime,
                        },
                     }
                 }
                 onPlay={ videoOnPlay }
                 onReady={initialize}
            />
            <Link className={classes.banner + ' ' + (IsBannerOpen ? classes.banner__open : '')} to='/phone'>Banner</Link>
            <Navigation linkPrev='/final' linkNext='/phone'/>
        </div>
    );
}
