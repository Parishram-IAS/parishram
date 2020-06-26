import React from 'react';
import Carousel from '../Carousel';
import { Grid, Header, Image, Embed } from 'semantic-ui-react';

import styles from './Home.module.css';
import VideoPlayer from '../VideoPlayer';
const Home = () => {
    return (
        <Grid className="grid-margin-removal">
            <Grid.Row>
                <Carousel />
            </Grid.Row>
            <Grid.Row>
                <Header className={styles.cardTitle}> Free Initiatives</Header>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Image className={`margin-center ${styles.svgSize}`} src="/assets/svg/book.svg" />
                    <Header as='h3' className='text-center'>IAS EXAM</Header>
                </Grid.Column>

                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Image className={`margin-center ${styles.svgSize}`} src="/assets/svg/newspaper.svg" />
                    <Header as='h3' className='text-center'> CURRENT AFFAIRS</Header>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Image className={`margin-center ${styles.svgSize}`} src="/assets/svg/paper.svg" />
                    <Header as='h3' className='text-center'> EDITORIALS</Header>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Image className={`margin-center ${styles.svgSize}`} src="/assets/svg/writing.svg" />
                    <Header as='h3' className='text-center'> MAINS ANSWER WRITING</Header>
                </Grid.Column>
            </Grid.Row >
            <Grid.Row>
                <VideoPlayer />
            </Grid.Row>
        </Grid >
    )
};

export default Home;