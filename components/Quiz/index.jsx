import React, { Fragment, useContext } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import QuizHeader from './QuizHeader';
import Question from './Question';
import QuizFooter from './QuizFooter';
import QuizResult from './QuizResult';
import QuizReview from './QuizReview';
import { QuizContext } from '../../context/Quiz';


const QuizWrapper = () => {
    const { reviewPage } = useContext(QuizContext);
    return (
        <Fragment>
            {!reviewPage ? (
                <Container>
                    <Grid className="grid-margin-removal">
                        <Grid.Row>
                            <QuizHeader />
                        </Grid.Row>
                        <Grid.Row>
                            <Question />
                        </Grid.Row>
                        <Grid.Row>
                            <QuizFooter />
                        </Grid.Row>
                    </Grid>
                </Container>
            ) :
                (
                    <Container>
                        <Grid className="grid-margin-removal">
                            <Grid.Row>
                                <QuizResult />
                            </Grid.Row>
                        </Grid>
                    </Container>
                )
            }
        </Fragment>

    )
}

export default QuizWrapper;