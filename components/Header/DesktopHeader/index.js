import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import Link from "next/link";

import styles from "./DesktopHeader.module.css";
const DesktopHeader = () => {
  const [activeItem, setactiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
  };
  return (
    <Menu secondary attached="top" className={styles.menuWrapper}>
      <Link href="/">
        <a>
          <Menu.Item className="parishramLogo">
            <div className='parishromImage'></div>
          </Menu.Item>
        </a>
      </Link>
      <Menu.Menu position="right" className={styles.menu_header_right}>
        <Link href="/editorial/hindu">
          <a className={styles.headerText}>
            <Menu.Item name="IAS EXAM" active={activeItem === "IAS EXAM"} onClick={handleItemClick} />
          </a>
        </Link>
        <Link href="/editorial/hindu">
          <a>
            <Menu.Item name="CURRENT AFFAIRS" active={activeItem === "CURRENT AFFAIRS"} onClick={handleItemClick} />
          </a>
        </Link>
        <Link href="/editorial/hindu">
          <a>
            <Menu.Item name="EDITORIALS" active={activeItem === "EDITORIALS"} onClick={handleItemClick} />
          </a>
        </Link>
        <Link href="/editorial/hindu">
          <a>
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
