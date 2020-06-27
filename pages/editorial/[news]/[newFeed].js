import React, { useEffect } from 'react';
import Router from 'next/router';
import _isEmpty from 'lodash/isEmpty';

import Layout from '../../../components/Layout';
import { getIndividualArticle } from '../../../services/firebase/article';
import { Grid, Image, Header, Container, Segment } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

const noImgData = "https://images.unsplash.com/photo-1567468150176-8d1c64777720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80";
const NewFeed = ({ data }) => {
    const newsFeed = !_isEmpty(data) ? JSON.parse(data) : {}
    const desc = !_isEmpty(newsFeed) ? newsFeed.description : '';
    useEffect(() => {
        _isEmpty(newsFeed) ? Router.push(`/editorial/hindu`) : null;
    })
    return (
        <Layout>
            {newsFeed && <Grid className='grid-margin-removal'>
                <Grid.Row>
                    <Image alt="parishram-Ias-caursoel" src="/assests/images/newsFeed_cover.png" className="news-feed-carousel" />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <div className="newFeed-profile-picture-wrapper">
                            <Image alt="parishram-Ias-caursoel" clasName="newFeed-profile-picture" src={newsFeed.featured_image || noImgData} />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <div classNameName="ProfileHeaderWraper">
                            <Header as="h3">
                                {newsFeed.title}
                                <Header.Subheader>
                                    sub heading
                                </Header.Subheader>
                            </Header>
                            <div>
                                {
                                    (newsFeed.tags && newsFeed.tags.length > 0) &&
                                    newsFeed.tags.map((tag) => (
                                        <span className="badge-group">{tag}</span>
                                    ))
                                }
                            </div>
                        </div>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Segment style={{ width: "100%" }}>
                        <div className="newsFeed-body-wrapper">
                            {ReactHtmlParser(desc)}
                        </div>
                    </Segment>
                </Grid.Row>
            </Grid>}
        </Layout>
    )
};

export default NewFeed;

export async function getServerSideProps({ req, query, params }) {
    let article = {};
    const newsType = query.news;
    const newsFeed = query.newFeed;
    try {
        article = await getIndividualArticle(newsType, newsFeed);
    } catch (err) {
        // article = err
    }

    return {
        props: {
            data: JSON.stringify(article),
        },
    };
}