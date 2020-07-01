import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import _isEmpty from 'lodash/isEmpty';

import Layout from '../../../components/Layout';
import { getIndividualArticle, editorialArticleTags } from '../../../services/firebase/article';
import { Grid, Image, Header, Segment, Container } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import EditorialCard from '../../../components/EditorialCard';
import SidebarComponent from '../../../components/drawer';

const noImgData = "https://images.unsplash.com/photo-1567468150176-8d1c64777720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80";
const NewFeed = ({ data, newsType }) => {
    const [articleList, setArticleList] = useState([]);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [drawerLoader, setDrawerLoader] = useState(false);
    const [tagsBasedList, setTagsBasedList] = useState([]);
    const [tag, setTag] = useState('')

    const newsFeed = !_isEmpty(data) ? JSON.parse(data) : {};
    const contentText = newsFeed.content || '';
    const seoKeywords = newsFeed.keywords && newsFeed.keywords.length > 0 ? newsFeed.keywords.join() : null;

    useEffect(() => {
        if (_isEmpty(newsFeed)) {
            Router.push(`/editorial/${newsType}`);
            return;
        }
        editorialArticleTags(newsFeed.tags)
            .then((articleArr) => {
                setArticleList([...articleArr]);
            })
            .catch(err => {
                setArticleList([]);
            })
    }, []);

    const showRevelantTags = (tag) => {
        setDrawerVisible(true);
        setDrawerLoader(true)
        setTag(tag);
        editorialArticleTags(tag.split(" "))
            .then((articleArr) => {
                setDrawerLoader(false)
                setTagsBasedList([...articleArr]);
            })
            .catch(err => {
                setDrawerVisible(false);
                setTagsBasedList([]);
                setDrawerLoader(false)
            })
    };
    const handleClose = () => {
        setDrawerVisible(false);
        setTagsBasedList([]);
    }
    return (
        <Layout
            title={newsFeed.title || 'Parishram'}
            keywords={seoKeywords}
            description={newsFeed.seo_description}
        >
            {drawerVisible
                &&
                <div>
                    <SidebarComponent
                        tag={tag}
                        drawerLoader={drawerLoader}
                        tagsBasedList={tagsBasedList}
                        handleClose={handleClose}
                    />
                </div>
            }
            {
                (!drawerVisible && newsFeed) && <Grid className='grid-margin-removal'>
                    <Grid.Row>
                        <Image src={newsFeed.featured_image} className="news-feed-carousel" alt="parishram-Ias-caursoel" />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <div className="newFeed-profile-picture-wrapper">
                                <Image alt={newsFeed.featured_image_alt || 'parishram-Ias'} className="newFeed-profile-picture" src={newsFeed.featured_image || noImgData} />
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
                                            <span key={`${tag}`} className="badge-group" onClick={() => showRevelantTags(tag)}>{tag}</span>
                                        ))
                                    }
                                </div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Segment className="newsFeed-segment">
                            <div className="newsFeed-body-wrapper">
                                {ReactHtmlParser(contentText)}
                            </div>
                        </Segment>
                    </Grid.Row>
                    {(articleList && articleList.length > 1) &&
                        <Grid.Row className="revelant-news-container">
                            <Container textAlign="center">
                                <Header as='h3'>RELEVANT NEWS</Header>
                            </Container>
                            {articleList.map((article) => {
                                if (article.id === newsFeed.id) {
                                    return null
                                }
                                return (<EditorialCard type={article.category} article={article} />)
                            })}
                        </Grid.Row>
                    }
                </Grid>
            }

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
            newsType,
            data: JSON.stringify(article),
        },
    };
}