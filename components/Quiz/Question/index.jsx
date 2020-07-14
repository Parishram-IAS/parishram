import React, { useEffect, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { QuizContext } from '../../../context/Quiz';
import QuestionCard from '../QuestionCard';
import _isEmpty from 'lodash/isEmpty';

const Question = () => {
    const { questionNumber, questionDayList, updateTime } = useContext(QuizContext);
    useEffect(()=>{
        updateTime(new Date().getTime())
    },[]);
    return (
        <Grid className='parentWidth'>
            <Grid.Row>
                {`Question ${questionNumber} of ${!_isEmpty(questionDayList) && Object.keys(questionDayList).length}`}
            </Grid.Row>
            <Grid.Row>
                {questionNumber}
            </Grid.Row>
            <Grid.Row>
                <QuestionCard
                    questionDetails={!_isEmpty(questionDayList) ? questionDayList[questionNumber] : {}}
                    questionNumber={questionNumber}
                />
            </Grid.Row>
        </Grid>
    )
}

export default Question;