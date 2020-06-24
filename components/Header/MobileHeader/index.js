import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';


const MobileHeader = ({ visible }) => {

    return (
        <Sidebar
            as={Menu}
            animation='push'
            direction='left'
            inverted
            vertical
            visible={visible}
            width='thin'
        >
            <Menu.Item as='a'>
                IAS EXAM
                    </Menu.Item>
            <Menu.Item as='a'>
                CURRENT AFFAIRS
                    </Menu.Item>
            <Menu.Item as='a'>
                EDITORIALS
                    </Menu.Item>
            <Menu.Item as='a'>
                MAINS ANSWER WRITING
                    </Menu.Item>
        </Sidebar>
    )
};

export default MobileHeader;