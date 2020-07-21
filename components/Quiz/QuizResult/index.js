import React, { useContext } from 'react';
import { Button, Grid, Container, Segment, Table, Form, Header } from 'semantic-ui-react';
import _isEmpty from 'lodash/isEmpty';

import QuizReview from '../QuizReview';
import QuizFooter from '../QuizFooter';
import { QuizContext } from '../../../context/Quiz';

const QuizResult = () => {
    const { answersObj, questionDayList, setTime } = useContext(QuizContext);
    const numberOfQuestion = !_isEmpty(questionDayList) ? Object.keys(questionDayList).length : 0;
    const answerQuestion = !_isEmpty(answersObj) ? Object.keys(answersObj).length : 0;
    let count = 0;

    const displayScore = () => {
        !_isEmpty(answersObj) ? Object.values(answersObj).map((answer) => {
            count += answer.count;
        }) : 0;
    }
    const displayScoreAvg = () =>{
        return Math.ceil((count / numberOfQuestion) * 100)
    }
    const handleFormClick= (event)=>{
        event.preventDefault();
    }
    return (
        <Grid className="grid-margin-removal">
            <Grid.Row>
                Results
                </Grid.Row>
            <Grid.Row>
                {`${answerQuestion} out ${numberOfQuestion} question answered`}
            </Grid.Row>
            <Grid.Row>
                {`Your time is ${setTime}`}
            </Grid.Row>
            <Grid.Row>
                <Container>
                    {displayScore()}
                    {`You have scored ${count} points out of ${numberOfQuestion} points`}
                    <Segment>
                        <Table celled>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Average score</Table.Cell>
                                    <Table.Cell>{displayScoreAvg()}%</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Your score</Table.Cell>
                                    <Table.Cell>{`${count}`}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                </Container>
            </Grid.Row>
            <Grid.Row>
                <Segment className="fullWidth">
                    <Header as='h4'>Your result has been entered into leaderboard</Header>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                        </Form.Field>
                        <Button type='submit' onClick={handleFormClick}>Send</Button>
                    </Form>
                </Segment>
            </Grid.Row>
            <Grid.Row>
                <QuizFooter />
            </Grid.Row>
            <Grid.Row>
                <QuizReview />
            </Grid.Row>
        </Grid>
    )
}

export default QuizResult;