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
                <Header className={styles.cardTitle}> Our Initiatives</Header>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={5} computer={5}>
                    <Link href="/editorial">
                        <a>
                            <Image alt="parishram-Ias-caursoel" className={`margin-center ${styles.svgSize}`} src="/assets/svg/newspaper.svg" />
                            <Header as='h3' className='text-center'> CURRENT AFFAIRS</Header>
                        </a>
                    </Link>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={6} computer={6}>
                    <Link href="/editorial/hindu">
                        <a>
                            <Image alt="parishram-Ias-caursoel" className={`margin-center ${styles.svgSize}`} src="/assets/svg/paper.svg" />
                            <Header as='h3' className='text-center'> EDITORIALS</Header>
                        </a>
                    </Link>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={5} computer={5}>
                    <Link href="/editorial">
                        <a>
                            <Image alt="parishram-Ias-caursoel" className={`margin-center ${styles.svgSize}`} src="/assets/svg/writing.svg" />
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