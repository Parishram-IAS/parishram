import React, { useState } from 'react';
import { Tab, Responsive } from 'semantic-ui-react';

import Layout from '../components/Layout';
import AddArticle from '../components/Admin/add-article';
import AddQuestion from '../components/Admin/add-question';
const panes = [
    { menuItem: 'Add Article', render: () => <Tab.Pane className="admin-tab-pane"><AddArticle /></Tab.Pane> },
    { menuItem: 'Add Questions', render: () => <Tab.Pane className="admin-tab-pane"><AddQuestion /></Tab.Pane> },
    
]

const Admin = () => {
    const [activeTabIndex, setactiveTabIndex] = useState(0)
    const handleTab = (event,data) => {
        const{
            activeIndex,
        } = data;
        setactiveTabIndex(activeIndex);
    }
    return (
        <Layout>
            <Responsive minWidth={768}>
                <div className="admin-wrapper">
                    <Tab
                        grid={{
                            paneWidth: 11,
                            tabWidth: 5,
                        }}
                        menu={{
                            fluid: true,
                            vertical: true,
                            secondary: true,
                        }}
                        panes={panes}
                        activeIndex={activeTabIndex}
                        onTabChange={handleTab}
                    />
                </div>
            </Responsive>
            <Responsive maxWidth={767}>
                <div className="admin-wrapper">
                    <Tab
                        menu={{
                            pointing: true,
                            secondary: true,
                        }}
                        panes={panes}
                        activeIndex={activeTabIndex}
                        onTabChange={handleTab}
                    />
                </div>
            </Responsive>
        </Layout>
    )
}

export default Admin