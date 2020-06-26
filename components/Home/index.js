import React from 'react';
import Carousel from '../Carousel';
import { Grid, Header, Image } from 'semantic-ui-react';
import Link from 'next/link';

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
                    <Link href="/editorial">
                        <a>
                            <Image className={`margin-center ${styles.svgSize}`} src="/assests/svg/book.svg" />
                            <Header as='h3' className='text-center'>IAS EXAM</Header>
                        </a>
                    </Link>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Link href="/editorial">
                        <a>
                            <Image className={`margin-center ${styles.svgSize}`} src="/assests/svg/newspaper.svg" />
                            <Header as='h3' className='text-center'> CURRENT AFFAIRS</Header>
                        </a>
                    </Link>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Link href="/editorial/hindu">
                        <a>
                            <Image className={`margin-center ${styles.svgSize}`} src="/assests/svg/paper.svg" />
                            <Header as='h3' className='text-center'> EDITORIALS</Header>
                        </a>
                    </Link>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                    <Link href="/editorial">
                        <a>
                            <Image className={`margin-center ${styles.svgSize}`} src="/assests/svg/writing.svg" />
                            <Header as='h3' className='text-center'> MAINS ANSWER WRITING</Header>
                        </a>
                    </Link>
                </Grid.Column>
            </Grid.Row >
            <Grid.Row>
                <VideoPlayer />
            </Grid.Row>
        </Grid >
    )
};

export default Home;