import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import _isEmpty from 'lodash/isEmpty';

import style from './QuizFooter.module.css'
import { QuizContext } from '../../../context/Quiz';
const QuizFooter = () => {
    const { questionNumber, questionDayList, reviewPage, updateQuestionNumber, updateReviewPage, updateAnswersObject, updateTime } = useContext(QuizContext);
    const [showBack, setShowBack] = useState(false);
    const [showNext, setShowNext] = useState(true);

    useEffect(() => {
        Object.keys(questionDayList).includes((questionNumber - 1).toString()) ? setShowBack(true) : setShowBack(false);
        Object.keys(questionDayList).includes((questionNumber + 1).toString()) ? setShowNext(true) : setShowNext(false);
    }, [questionNumber]);

    const handleQuestionNumberClick = (increment, event) => {
        if (increment === 'minus') {
            updateQuestionNumber(questionNumber - 1)
        }
        if (increment === 'plus') {
            if (!_isEmpty(event.target.innerText) && event.target.innerText.toLowerCase().includes('finish')) {
                updateReviewPage(true);
                return;
            }
            updateQuestionNumber(questionNumber + 1)
        }
        Object.keys(questionDayList).includes((questionNumber - 1).toString()) ? setShowBack(true) : setShowBack(false);
        Object.keys(questionDayList).includes((questionNumber + 1).toString()) ? setShowNext(true) : setShowNext(false);
    }
    const handleRestartTest = () =>{
        updateReviewPage(false);
        updateAnswersObject({}, true);
        updateQuestionNumber(1);
        updateTime(new Date());
    }
    return (
        <Grid className="parentWidth">
            {!reviewPage ? (
                <Fragment>
                    <Grid.Column width={8}>
                        {
                            showBack &&
                            <Button onClick={(event) => handleQuestionNumberClick('minus', event)} className={style.buttonBackground}>Back</Button>
                        }
                    </Grid.Column>
                    <Grid.Column width={8} className={style.buttonAlignEnd}>
                        <Button onClick={(event) => handleQuestionNumberClick('plus', event)} className={`${style.buttonBackground} ${style.nextButtonAlign}`}>
                            {showNext ? 'Next' : 'Finish Test'}
                        </Button>
                    </Grid.Column>
                </Fragment>
            ) : (
                    <Fragment>
                        <Grid.Column width={8}>
                                <Button onClick={handleRestartTest} className={style.buttonBackground}>Restart Test</Button>
                        </Grid.Column>
                        <Grid.Column width={8} className={style.buttonAlignEnd}>
                            <Button onClick={(event) => handleQuestionNumberClick('plus', event)} className={`${style.buttonBackground}`}>
                                Show LeaderShipBoard
                            </Button>
                        </Grid.Column>
                    </Fragment>
                )
            }
        </Grid>
    )
}

export default QuizFooter;