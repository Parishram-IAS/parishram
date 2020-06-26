import React, {Fragment} from 'react';
import Head from 'next/head';

import ErrorBoundary from '../ErrorBoundary';
import { Responsive, Container, Segment } from 'semantic-ui-react';
import MobileWrapper from '../Wrapper/mobileWrapper';
import DesktopWrapper from '../Wrapper/desktopWrapper';

class Layout extends React.Component {
    render() {
        return (
            <Fragment>
                <Head>
                    <title>Parishram</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
                </Head>
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
            </Fragment>
        );
    }
}

export default Layout;