import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, Segment, List, Icon } from 'semantic-ui-react';

import { QuizContext } from '../../../context/Quiz';
import styles from './QuizHeader.module.css';
const QuizHeader = () => {
    //context reference
    const { questionNumber, updateQuestionNumber, questionDayList, updateReviewPage } = useContext(QuizContext);
    //setting the number of question numbers to be displayed
    const questionNumberDisplay = Object.keys(questionDayList);
    const [questionNumberPagination, setQuestionNumberPagination] = useState(questionNumberDisplay);

    //state for setting active class or the question that is selected currently in header
    const [activeIndex, setActiveIndex] = useState(questionNumber);

    //state for setting review classes
    const [reviewClass, setReviewClass] = useState([]);

    useEffect(() => {
        const questionNumberDisplayChange = Object.keys(questionDayList);
        setActiveIndex(questionNumber);
        setQuestionNumberPagination(questionNumberDisplayChange);
    }, [questionNumber, questionDayList]);

    //handle question number clicked in header
    const handleQuestionNumberClick = (event) => {
        const questionNumber = event && event.target && event.target.innerText ? Number(event.target.innerText) : activeIndex;
        updateQuestionNumber(questionNumber)
        setActiveIndex(questionNumber);
    };

    //handle setting the review class to be added in the header
    const handleSetReviewClass = () => {
        if (reviewClass.includes(activeIndex)) {
            reviewClass.splice(reviewClass.indexOf(activeIndex), 1);
            setReviewClass([...reviewClass])
        } else {
            setReviewClass([...reviewClass, activeIndex])
        }
    }

    const handleFinishTest = () => {
        updateReviewPage(true);
    }

    return (
        <Grid className="grid-margin-removal fullWidth">
            <Grid.Row>
                <Segment className="question-number-wrapper">
                    <List horizontal>
                        {
                            questionNumberPagination.map(pageNumber => (
                                <List.Item
                                    key={'pagNumner' + pageNumber}
                                    name={Number(pageNumber)}
                                    onClick={handleQuestionNumberClick}
                                    className={`question-number ${activeIndex === Number(pageNumber) ? 'active' : ''} ${reviewClass.includes(Number(pageNumber)) ? 'reviewClass' : ''}`}>
                                    {Number(pageNumber)}
                                </List.Item>
                            ))}
                    </List>
                </Segment>
            </Grid.Row>
            <Grid.Row>
                <List horizontal>
                    <List.Item>
                        <Icon name="square full" color="green" />Answered
                        </List.Item>
                    <List.Item>
                        <Icon name="square full" className={styles.reviewedCheckBoxIcon}/>Reviewed
                        </List.Item>
                </List>
            </Grid.Row>
            <Grid.Row className={styles.reviewSectionWrapper}>
                <Grid.Column width={8}>
                    <Button onClick={handleSetReviewClass}>Review Question</Button>
                </Grid.Column>
                <Grid.Column width={8} className={styles.finishButtonAlign}>
                    <Button onClick={handleFinishTest}>Finish Test</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default QuizHeader;