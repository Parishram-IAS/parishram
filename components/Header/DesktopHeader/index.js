import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

import styles from './DesktopHeader.module.css';
const DesktopHeader = () => {
    const [activeItem, setactiveItem] = useState('home')

    const handleItemClick = (e, { name }) => {
        setactiveItem(name)
    }
    return (
        <Menu
            secondary
            attached='top'
            className = {styles.menuWrapper}
        >
            <Menu.Item header>LOGO</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='IAS EXAM'
                    active={activeItem === 'IAS EXAM'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='CURRENT AFFAIRS'
                    active={activeItem === 'CURRENT AFFAIRS'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='EDITORIALS'
                    active={activeItem === 'EDITORIALS'}
                    onClick={handleItemClick}
                />
                      <Menu.Item
                    name='MAINS ANSWER WRITING'
                    active={activeItem === 'MAINS ANSWER WRITING'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>

        </Menu>

    );
}

export default DesktopHeader;