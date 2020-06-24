import React from 'react';


import ErrorBoundary from '../ErrorBoundary';
import { Responsive, Container, Segment } from 'semantic-ui-react';
import MobileWrapper from '../Wrapper/mobileWrapper';
import DesktopWrapper from '../Wrapper/desktopWrapper';

class Layout extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Responsive minWidth={320} maxWidth={991}>
                    <MobileWrapper>
                        {this.props.children}
                    </MobileWrapper>
                </Responsive>
                <Responsive minWidth={992}>
                    <DesktopWrapper>
                        {this.props.children}
                    </DesktopWrapper>
                </Responsive>
            </ErrorBoundary>
        );
    }
}

export default Layout;