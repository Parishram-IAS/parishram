import React, { Fragment, useEffect } from 'react';
import { Card, Header, Image, Grid, Icon, Segment, Container } from 'semantic-ui-react';

import styles from './EditorialCard.module.css';
const EditorialCard = ({ type }) => {
    const noDataImg = '/assests/svg/book.svg';
    useEffect(() => {
        console.log(type);
    }, []);

    return (
        <Fragment>
            <Card fluid className={styles.cardWraperrBorder}>
                <Card.Content>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            tablet={2}
                            computer={2}
                        >
                            <Image
                                floated="left"
                                src={noDataImg}
                                
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={14}
                            computer={14}
                        >
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Content className={styles.editorialCardTitle}>
                                         An Opportunity of Building an Economy Post COVID-19 Crisis
                                    </Header.Content>
                                    <Header clearing>
                                        <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                           Time
                                        </Header>
                                        <Header as='h5' floated='right' className={styles.readMoreText}>
                                        Read More
                                        </Header>
                                    </Header>
                                </Header>
                            </Card.Header>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            <Card fluid className={styles.cardWraperrBorder}>
                <Card.Content>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            tablet={2}
                            computer={2}
                        >
                            <Image
                                floated="left"
                                src={noDataImg}
                                
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={14}
                            computer={14}
                        >
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Content className={styles.editorialCardTitle}>
                                         An Opportunity of Building an Economy Post COVID-19 Crisis
                                    </Header.Content>
                                    <Header clearing>
                                        <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                           Time
                                        </Header>
                                        <Header as='h5' floated='right' className={styles.readMoreText}>
                                        Read More
                                        </Header>
                                    </Header>
                                </Header>
                            </Card.Header>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            <Card fluid>
                <Card.Content>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            tablet={2}
                            computer={2}
                        >
                            <Image
                                floated="left"
                                src={noDataImg}
                                
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={14}
                            computer={14}
                        >
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Content className={styles.editorialCardTitle}>
                                         An Opportunity of Building an Economy Post COVID-19 Crisis
                                    </Header.Content>
                                    <Header clearing>
                                        <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                           Time
                                        </Header>
                                        <Header as='h5' floated='right' className={styles.readMoreText}>
                                        Read More
                                        </Header>
                                    </Header>
                                </Header>
                            </Card.Header>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            <Card fluid>
                <Card.Content>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            tablet={2}
                            computer={2}
                        >
                            <Image
                                floated="left"
                                src={noDataImg}
                                
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={14}
                            computer={14}
                        >
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Content className={styles.editorialCardTitle}>
                                         An Opportunity of Building an Economy Post COVID-19 Crisis
                                    </Header.Content>
                                    <Header clearing>
                                        <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                           Time
                                        </Header>
                                        <Header as='h5' floated='right' className={styles.readMoreText}>
                                        Read More
                                        </Header>
                                    </Header>
                                </Header>
                            </Card.Header>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            <Card fluid>
                <Card.Content>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            tablet={2}
                            computer={2}
                        >
                            <Image
                                floated="left"
                                src={noDataImg}
                                
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={14}
                            computer={14}
                        >
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Content className={styles.editorialCardTitle}>
                                         An Opportunity of Building an Economy Post COVID-19 Crisis
                                    </Header.Content>
                                    <Header clearing>
                                        <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                           Time
                                        </Header>
                                        <Header as='h5' floated='right' className={styles.readMoreText}>
                                        Read More
                                        </Header>
                                    </Header>
                                </Header>
                            </Card.Header>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
            <Card fluid>
                <Card.Content>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            tablet={2}
                            computer={2}
                        >
                            <Image
                                floated="left"
                                src={noDataImg}
                                
                            />
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            tablet={14}
                            computer={14}
                        >
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Content className={styles.editorialCardTitle}>
                                         An Opportunity of Building an Economy Post COVID-19 Crisis
                                    </Header.Content>
                                    <Header clearing>
                                        <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                           Time
                                        </Header>
                                        <Header as='h5' floated='right' className={styles.readMoreText}>
                                        Read More
                                        </Header>
                                    </Header>
                                </Header>
                            </Card.Header>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
        </Fragment>
    )
};

export default EditorialCard;