import React, { useEffect } from "react";

import Layout from "../../../components/Layout";
import { Tab, Button } from "semantic-ui-react";

import EditorialCard from "../../../components/EditorialCard";
import { getArticleList } from "../../../services/firebase/article";

const panes = [
  {
    menuItem: <Button>HINDU</Button>,
    render: () => (
      <Tab.Pane attached={false} className="editorialcard-tab-pane">
        <EditorialCard type="hindu" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: <Button>TIMES NOW</Button>,
    render: () => (
      <Tab.Pane attached={false} className="editorialcard-tab-pane">
        <EditorialCard type="timesnow" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: <Button>INDIA TODAY</Button>,
    render: () => (
      <Tab.Pane attached={false} className="editorialcard-tab-pane">
        <EditorialCard type="indiatoday" />
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

const Editorial = (props) => {
  console.log("JSON.data", JSON.parse(props.data))

  return (
    <Layout>
      <Tab className="editorial-menu-tab" menu={{ secondary: true }} panes={panes} />
    </Layout>
  );
};

export default Editorial;

export async function getServerSideProps({ req, query, params }) {
  let articleList;
  try {
    articleList = await getArticleList("livemint");
  } catch (err) {
    articleList = err
  }

  return {
    props: {
      data: JSON.stringify(articleList),
    },
  };
}
