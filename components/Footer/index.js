import React from 'react';

import styles from './Footer.module.css';
import { Container, Grid, Header, List, Image, Divider, Icon } from 'semantic-ui-react';

const Footer = () => {

    return (
        <div className={styles.myFooter}>
            <Container>
                <Grid className="grid-margin-removal">
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={4} computer={4}>
                            <div className='parishromImage' />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={4} computer={4}>
                            <Header as='h4'>Company</Header>
                            <List className={styles.myFooter_List_Text}>
                                <List.Item>Home</List.Item>
                                <List.Item>About us</List.Item>
                                <List.Item>career</List.Item>
                                <List.Item>privacy</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={4} computer={4}>
                            <Header as='h4'>Courses</Header>
                            <List className={styles.myFooter_List_Text}>
                                <List.Item>Home</List.Item>
                                <List.Item>About us</List.Item>
                                <List.Item>career</List.Item>
                                <List.Item>privacy</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={4} computer={4}>
                            <Header as='h4'>Follow us</Header>
                            <List className={styles.myFooter_List_Text} horizontal>
                                <List.Item><Icon className={styles.myFooter_follow_icon} name="facebook"/></List.Item>
                                <List.Item><Icon className={styles.myFooter_follow_icon} name="telegram plane"/></List.Item>
                                <List.Item><Icon className={styles.myFooter_follow_icon} name="youtube" /></List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className={styles.myFooter_copyright}>
                        © Parishram 2020. All Rights Reserved.
                    </Grid.Row>
                </Grid>

            </Container>
        </div>
    )
};

export default Footer;