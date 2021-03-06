import React, { Fragment } from 'react';
import Link from 'next/link';
import { Card, Header, Grid, Button } from 'semantic-ui-react';
import _isEmpty from 'lodash/isEmpty';

import styles from './EditorialCard.module.css';
const EditorialCard = ({ article, type }) => {
    const noDataImg = '/assets/svg/book.svg';
    return (
        <Fragment>
            {
                !_isEmpty(article) &&
                <Card fluid className={styles.cardWraperrBorder} key={article.id}>
                    <Link href={`/editorial/${type}/${article.id}`}>
                        <a>
                            <Card.Content>
                                <Grid>
                                    <Grid.Column
                                        mobile={16}
                                        tablet={2}
                                        computer={2}
                                    >
                                        <div
                                            style={{ backgroundImage: `url(${article.featured_image ? article.featured_image : noDataImg})` }}
                                            className={styles.editorialCardImage}
                                        />
                                    </Grid.Column>
                                    <Grid.Column
                                        mobile={16}
                                        tablet={14}
                                        computer={14}
                                    >
                                        <Card.Header>
                                            {(article.tags && article.tags.length > 0) &&
                                                (
                                                    article.tags.map((tag) => (
                                                        <Button basic color='grey' className={styles.cardWrapper_tag_text}>{tag}</Button>
                                                    ))
                                                )
                                            }
                                            <Header as="h3" className="grid-margin-removal ">
                                                <Header.Content className={styles.editorialCardTitle}>
                                                    {article.title.toUpperCase()}
                                                </Header.Content>
                                                <Header clearing>
                                                    <Header as='h5' floated='left' className={styles.editoriolTimeText}>
                                                        Time
                                                     </Header>
                                                    <Header as='h5' floated='right' className={styles.readMoreText}>
                                                        Read More...
                                                </Header>
                                                </Header>
                                            </Header>
                                        </Card.Header>
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </a>
                    </Link>
                </Card >
            }
        </Fragment>
    )
};

export default EditorialCard;