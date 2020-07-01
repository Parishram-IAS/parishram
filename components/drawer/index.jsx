import React, { Fragment } from 'react'
import EditorialCard from '../EditorialCard'
import { Container, Grid, Icon, Header, Placeholder } from 'semantic-ui-react'

import styles from './drawer.module.css';
import PlaceholderGrid from '../placeholder';
const SidebarComponent = ({ tag, tagsBasedList, drawerLoader, handleClose }) => {
    return (
        <Fragment>
            {
                drawerLoader ? (<PlaceholderGrid />) : (<Container>
                    <Grid>
                        <Grid.Row className={styles.tagHeader}>
                            <Grid.Column width={15}>
                                <Header as='h3'>
                                    Revelant article related to the tag {tag}
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Icon className={styles.closeIcon} corner="right" name="close" onClick={handleClose} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className={styles.sidebar}>
                            {
                                (tagsBasedList && tagsBasedList.length > 0) &&
                                tagsBasedList.map((article) => <EditorialCard article={article} />)
                            }
                        </Grid.Row>
                    </Grid>
                </Container>)
            }
        </Fragment>
    )
}
export default SidebarComponent

