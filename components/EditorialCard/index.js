import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import { Card, Header, Image, Grid, Placeholder } from 'semantic-ui-react';

import styles from './EditorialCard.module.css';
const EditorialCard = ({ articleList, loader, type }) => {
    const noDataImg = '/assets/svg/book.svg';

    const renderArticleList = () => {
        return articleList.map((article) => {
            return (
                <Card fluid className={styles.cardWraperrBorder} key={article.id}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column
                                mobile={16}
                                tablet={2}
                                computer={2}
                            >
                                <Image
                                    alt="parishram-Ias-caursoel"
                                    floated="left"
                                    src={article.featured_image || noDataImg}
                                    className={styles.card_image}
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
                                            {article.title}
                                        </Header.Content>
                                        <Header clearing>
                                            <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                                Time
                                       </Header>
                                            <Header as='h5' floated='right' className={styles.readMoreText}>
                                                <Link href={`/editorial/${type}/${article.id}`}>
                                                    <a>
                                                        Read More...
                                                    </a>
                                                </Link>
                                            </Header>
                                        </Header>
                                    </Header>
                                </Card.Header>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            )
        })
    }
    return (
        <Fragment>
            {
                loader ? (
                    <Placeholder fluid>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>

                    </Placeholder>
                )
                    : (
                        (articleList && articleList.length > 0) ? renderArticleList()
                            : 'No Data to display'
                    )
            }
        </Fragment>
    )
};

export default EditorialCard;