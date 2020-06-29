import React, { useState, useEffect } from "react";
import Router from 'next/router';
import { Tab, Button } from "semantic-ui-react";

import Layout from "../../../components/Layout";
import EditorialCard from "../../../components/EditorialCard";
import { getArticleList, allEditorialArticle } from "../../../services/firebase/article";

const editorialTabSelection = {
    'all': 0,
    'hindu': 1,
    'livemint': 2,
    'indiatoday': 3,
};
class Editorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultActiveIndex: editorialTabSelection[props.url],
            articleList: JSON.parse(this.props.data) || []
        }
    }

    handleTabChange = (route,activeIndex) => {
        Router.push(`/editorial/${route}`);
        this.setState({ defaultActiveIndex: activeIndex });

    }

    render() {
        const {
            articleList,
            defaultActiveIndex,
        } = this.state;
        const panes = [
            {
                menuItem: <Button>ALL</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="all" articleList={articleList}/>
                    </Tab.Pane>
                ),
                route: 'all'
            },
            {
                menuItem: <Button>HINDU</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="hindu" articleList={articleList} />
                    </Tab.Pane>
                ),
                route: 'hindu'
            },
            {
                menuItem: <Button>LIVE MINT</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="livemint" articleList={articleList} />
                    </Tab.Pane>
                ),
                route: 'livemint'
            },
            {
                menuItem: <Button>INDIA TODAY</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="indiatoday" articleList={articleList} />
                    </Tab.Pane>
                ),
                route: 'indiatoday'
            },
        ];
        return (
            <Layout>
                <Tab
                    className="editorial-menu-tab"
                    defaultActiveIndex={defaultActiveIndex}
                    menu={{ secondary: true }}
                    panes={panes}
                    onTabChange={(_,data)=>this.handleTabChange(panes[data.activeIndex].route,data.activeIndex)}
                />
            </Layout>
        );
    }
};

export default Editorial;

export async function getServerSideProps({ req, query, params }) {
    let articleList = [];
    const queryValue = query.news || 'all';
    try {
        articleList =  queryValue === 'all' ? await allEditorialArticle() : await getArticleList(queryValue);
    } catch (err) {
        articleList = err
    }

    return {
        props: {
            url: queryValue,
            data: JSON.stringify(articleList),
        },
    };
}
