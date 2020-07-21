import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { Menu, Image } from "semantic-ui-react";
import Link from "next/link";

import styles from "./DesktopHeader.module.css";
const DesktopHeader = () => {
  const [activeItem, setactiveItem] = useState("home");
  const router = useRouter()
  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
  };
  return (
    <Menu secondary attached="top" className={`${styles.menuWrapper} `}>
      <Link href="/">
        <a>
          <Menu.Item className="parishramLogo">
            <div className='parishromImage'></div>
          </Menu.Item>
        </a>
      </Link>
      <Menu.Menu position="right" className={styles.menu_header_right}>
        <Link href="/quiz">
          <a className={`${styles.headerText} ${activeItem === "QUIZ" ? ' desktopheader active' : ''}`}>
            <Menu.Item name="QUIZ" active={activeItem === "QUIZ"} onClick={handleItemClick} />
          </a>
        </Link>
        <Link href="/editorial/hindu">
        <a className={`${styles.headerText} ${activeItem === "CURRENT AFFAIRS" ? 'active' : ''}`}>
            <Menu.Item name="CURRENT AFFAIRS" active={activeItem === "CURRENT AFFAIRS"} onClick={handleItemClick} />
          </a>
        </Link>
        <Link href="/editorial/hindu">
        <a className={styles.headerText}>
            <Menu.Item name="EDITORIALS" className={`desktokHeader ${router.route.includes('editorial') ? 'active' : ''}`} active={activeItem === "EDITORIALS"} onClick={handleItemClick} />
          </a>
        </Link>
        <Link href="/editorial/hindu">
        <a className={`${styles.headerText} ${activeItem === "MAINS ANSWER WRITING" ? 'active' : ''}`}>
            <Menu.Item
              name="MAINS ANSWER WRITING"
              active={activeItem === "MAINS ANSWER WRITING"}
              onClick={handleItemClick}
            />
          </a>
        </Link>
      </Menu.Menu>

    </Menu>
  );
};

export default DesktopHeader;
