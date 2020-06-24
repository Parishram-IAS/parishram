import React from 'react';

import styles from './VideoPlayer.module.css'
const VideoPlayer = () => {

    return (
        <div className={styles.videoContainer}>
            <iframe src="https://www.youtube.com/embed/klZNNUz4wPQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
};

export default VideoPlayer;