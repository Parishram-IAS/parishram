import React, { Fragment } from 'react';
import {  Grid, Segment, List, Header, Radio } from 'semantic-ui-react';
import _isEmpty from 'lodash/isEmpty';

import { QuizContext } from '../../../context/Quiz';
import styles from './QuestionCard.module.css';
class QuestionCard extends React.Component {
    static contextType = QuizContext
    handleOptionsClicked = (event, data) => {
        const {
            id,
            value
        } = data;
        const {
            questionDetails
        } = this.props;
        const { updateAnswersObject } = this.context;
        const currentAnswerobj = {
            [this.props.questionNumber]: {
                checked: value,
                correct: questionDetails.correct === id,
                incorrect: questionDetails.correct !== id,
                count: questionDetails.correct === id ? 1 : 0
            }

        }
        updateAnswersObject(currentAnswerobj);
    }
    render() {
        const { answersObj } = this.context;
        const {
            questionDetails,
            questionNumber,
            review
        } = this.props;
        return (
            <Fragment>
                {!_isEmpty(questionDetails) ?
                    (
                        <Grid className="grid-margin-removal parentWidth">
                            <Grid.Row>
                                <Header as="h3">{questionDetails['question']}</Header>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment className={styles.answerOptionsWrapper}>
                                    <List>
                                        {
                                            questionDetails['answers'].map((answer, index) => {
                                               return  <List.Item
                                                    className={`${review && (questionDetails['correct'] === index + 1) ? styles.reviewCorrect : ''} 
                                                ${review && (!_isEmpty(answersObj) && answersObj[questionNumber] && answersObj[questionNumber]['checked'] === answer && answersObj[questionNumber]['incorrect']) ? styles.reviewInCorrect : ''}`}
                                                >
                                                    <Radio
                                                        label={answer}
                                                        className={styles.optionRadioButton}
                                                        id={index + 1}
                                                        value={answer}
                                                        checked={(!_isEmpty(answersObj) && answersObj[this.props.questionNumber] && answersObj[this.props.questionNumber]['checked'] === answer) ? true : false}
                                                        onClick={this.handleOptionsClicked}
                                                        disabled={review || false}
                                                    /></List.Item>
                                                    })
                                        }
                                    </List>
                                </Segment>
                            </Grid.Row>
                        </Grid>
                    ) :
                    (
                        <Grid className="grid-margin-removal parentWidth">
                            <Segment className={styles.noQuestionAvailable}>No Question available</Segment>
                        </Grid>
                    )
                }
            </Fragment>
        )
    }
}

export default QuestionCard;