import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container, Image } from 'semantic-ui-react';

import styles from './Carousel.module.css';
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
                autoPlay
                infiniteLoop
                swipeable
                interval={5000}
            >
                <div className={styles.carouselImage}>
                    <Image src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                    <p className={`legend ${styles.legendStyle}`}>Legend 1</p>
                </div>
                <div className={styles.carouselImage}>
                    <Image src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                    <p className={`legend ${styles.legendStyle}`}>Legend 2</p>
                </div>
                <div className={styles.carouselImage}>
                    <Image src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                    <p className={`legend ${styles.legendStyle}`}>Legend 3</p>
                </div>
            </Carousel>
        );
    }
};