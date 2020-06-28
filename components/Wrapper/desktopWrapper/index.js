import React, { useRef } from "react";
import { Sticky, Container } from "semantic-ui-react";

import styles from './DesktopWrapper.module.css';
import Footer from "../../Footer";
import DesktopHeader from "../../Header/DesktopHeader";

const DesktopWrapper = ({ children }) => {
    const contextRef = useRef(null);

    return (
        <Container className={styles.desktopParentWrapper}>
            <div ref={contextRef}>
                <Sticky context={contextRef}>
                    <DesktopHeader />
                </Sticky>
                <Container attached='bottom'>
                    <div class={styles.desktopParent_childen_wrapper}>
                        {children}
                    </div>
                    <Footer />
                </Container>
            </div>
        </Container>
    );
}


export default DesktopWrapper;