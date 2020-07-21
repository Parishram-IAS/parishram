import React, { Fragment } from 'react';
import { Container, Responsive } from 'semantic-ui-react';
import { CustomCalendar } from '../../CustomCalendar';

const QuizFilter = () => {
    return (
        <Fragment>
            <Responsive minWidth={992}>
                <Container>
                    <CustomCalendar />
                </Container>
            </Responsive>
            <Responsive minWidth={320} maxWidth={991}>
                <Container>
                </Container>
            </Responsive>
        </Fragment>
    )
}

export default QuizFilter;