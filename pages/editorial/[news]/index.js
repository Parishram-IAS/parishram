import React from 'react';

import Layout from '../../../components/Layout';
import { Tab, Button } from 'semantic-ui-react';

import EditorialCard from '../../../components/EditorialCard';
import { getArticleList } from '../../../services/firebase/article';

const panes = [
    {
        menuItem: <Button>HINDU</Button>,
        render: () => <Tab.Pane attached={false} className='editorialcard-tab-pane'><EditorialCard type='hindu' /></Tab.Pane>,
    },
    {
        menuItem: <Button>TIMES NOW</Button>,
        render: () => <Tab.Pane attached={false} className='editorialcard-tab-pane'><EditorialCard type='timesnow' /></Tab.Pane>,
    },
    {
        menuItem: <Button>INDIA TODAY</Button>,
        render: () => <Tab.Pane attached={false} className='editorialcard-tab-pane'><EditorialCard type='indiatoday' /></Tab.Pane>,
    },
    {
        menuItem: <Button>ALL</Button>,
        render: () => <Tab.Pane attached={false} className='editorialcard-tab-pane'><EditorialCard type='all' /></Tab.Pane>,
    },
]

const Editorial = (props) => {
    return (
        <Layout>
            <Tab
                className="editorial-menu-tab"
                menu={{ secondary: true }}
                panes={panes}
            />
        </Layout>
    )
};

export default Editorial;
// This gets called on every request
// export async function getServerSideProps({ req, query, params }) {
//     // Fetch data from external API
//     let articleList;
//     try {
//          articleList = await getArticleList('livemint');
//         // Pass data to the page via props
//     } catch (err) {
//         articleList = err;
//         console.log('err', err)
//     }
//     return {
//         props: {
//             data: articleList
//         }
//     }
// }
