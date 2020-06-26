import React, { useState, useEffect } from "react";
import Router from 'next/router'
import { Tab, Button } from "semantic-ui-react";

import Layout from "../../../components/Layout";
import EditorialCard from "../../../components/EditorialCard";
import { getArticleList } from "../../../services/firebase/article";

const editorialTabSelection = {
    'hindu': 0,
    'livemint': 1,
    'indiatoday': 2,
    'all': 3,
};
class Editorial extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            defaultActiveIndex: editorialTabSelection[props.url],
            articleList: JSON.parse(this.props.data) || []
        }
    }

    handleTabChange = (event, data) => {
        const editorialTabRoute = {
            0: 'hindu',
            1: 'livemint',
            2: 'indiatoday',
            3: 'all',
        };
        const active = data.activeIndex;
        Router.push(`/editorial/${editorialTabRoute[active]}`, undefined, { shallow: true });
        this.setState({ defaultActiveIndex: active });

    }
    render() {
        const {
            articleList,
            defaultActiveIndex,
        } = this.state;
        const panes = [
            {
                menuItem: <Button>HINDU</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="hindu" articleList={articleList} />
                    </Tab.Pane>
                ),
            },
            {
                menuItem: <Button>LIVE MINT</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="livemint" articleList={articleList} />
                    </Tab.Pane>
                ),
            },
            {
                menuItem: <Button>INDIA TODAY</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="indiatoday" articleList={articleList} />
                    </Tab.Pane>
                ),
            },
            {
                menuItem: <Button>ALL</Button>,
                render: () => (
                    <Tab.Pane attached={false} className="editorialcard-tab-pane">
                        <EditorialCard type="all" />
                    </Tab.Pane>
                ),
            },
        ];
        return (
            <Layout>
                <Tab
                    className="editorial-menu-tab"
                    defaultActiveIndex={defaultActiveIndex}
                    menu={{ secondary: true }}
                    panes={panes}
                    onTabChange={this.handleTabChange}
                />
            </Layout>
        );
    }
};

export default Editorial;

export async function getServerSideProps({ req, query, params }) {
    let articleList = {};
    const queryValue = query.news || 'hindu';
    try {
        articleList = await getArticleList(queryValue);
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
