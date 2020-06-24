import React, { useState } from 'react';
import { Sidebar, List, Container, Menu } from 'semantic-ui-react';

import Footer from '../../Footer';
import styles from './mobileWrapper.module.css';
import MobileHeader from '../../Header/MobileHeader';

const MobileWrapper = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  }
  return (
    <Container fluid className={styles.mobileParentWraper}>
      <Menu secondary>
        <Menu.Item>Logo</Menu.Item>
        <Menu.Item position="right" onClick={handleVisible}> <i className="sidebar icon"/></Menu.Item>
      </Menu>
      <Sidebar.Pushable className={styles.sidebarPushable}>
        <MobileHeader visible={visible}/>
        <Sidebar.Pusher>
          <Container fluid>
            <div className={styles.sidebarPusher}>
              {children}
            </div>
          </Container>
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>

    </Container>
  )
}
export default MobileWrapper;