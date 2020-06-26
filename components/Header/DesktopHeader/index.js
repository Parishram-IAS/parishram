import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import Link from 'next/link';

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
            className={styles.menuWrapper}
        >
            <Link href="/">
                <a>
                    <Menu.Item header>LOGO</Menu.Item>
                </a>
            </Link>
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
                <Link href="/editorial/hindu">
                    <a>
                        <Menu.Item
                            name='EDITORIALS'
                            active={activeItem === 'EDITORIALS'}
                            onClick={handleItemClick}
                        />
                    </a>
                </Link>
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