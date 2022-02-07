import React, {useState} from 'react';
import YouTube from 'react-youtube';
import classes from "./Video.module.css";
import {Navigation} from "../Navigation/Navigation";
import {Link} from "react-router-dom";

export const Video: React.FC = () => {
    const [youtubeID] = useState('M7FIvfx5J10');
    const [IsBannerOpen, EditIsBannerOpen] = useState(false);

    const videoOnPlay = () => {
        if (!IsBannerOpen) {
            setTimeout(() => EditIsBannerOpen(true), 5000);
        }
    }

    return (
        <div>
            <YouTube className={classes.video} videoId={youtubeID}
                     opts={
                         {
                             height: '1280',
                             width: '720',
                             playerVars: {
                                 'autoplay': 1,
                                 'controls': 0,
                                 origin: 'http://localhost:3000/'
                            },
                         }
                     }
                     onPlay={ videoOnPlay } />
            <Link className={classes.banner + ' ' + (IsBannerOpen ? classes.banner__open : '')} to='/phone'>Banner</Link>
            <Navigation linkPrev='/final' linkNext='/phone'/>
        </div>
    );
}