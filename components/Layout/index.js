import React, {Fragment} from 'react';
import Head from 'next/head';

import ErrorBoundary from '../ErrorBoundary';
import { Responsive, Container, Segment } from 'semantic-ui-react';
import MobileWrapper from '../Wrapper/mobileWrapper';
import DesktopWrapper from '../Wrapper/desktopWrapper';

class Layout extends React.Component {
    render() {
        const {
            description,
            keywords,
            title,
            url,
            avatar,
        } = this.props;
        return (
            <Fragment>
                <Head>
                    <title>Parishram</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content={description}/>
                    <meta name="keywords" content={keywords} />
                    <meta property="og:title" content={title} />
                    <meta property="og:url" content={url} />
                    <meta property="og:image" content={avatar} />
                    <meta property="og:description" content={description}/>
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

Layout.defaultProps = {
    description: 'Parishram is an online learning platform for young vibrant IAS students ',
    keywords: "IAS, Parishram",
    title: 'Parishram',
    url: 'https://www.parishram.com',
    avatar:'',
}