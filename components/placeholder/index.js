import { Grid, Segment, Placeholder } from "semantic-ui-react";

import styles from './placeholder.module.css';
const PlaceholderGrid = () => (
    <Grid stackable className={styles.placeholder_Grid_Wrapper}>
      <Grid.Row>
        <Segment className={styles.placeholderWidth}>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Row>
  
      <Grid.Row>
        <Segment className={styles.placeholderWidth}>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Row>
  
      <Grid.Row>
        <Segment className={styles.placeholderWidth}>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Row>
    </Grid>
  )
  
  export default PlaceholderGrid