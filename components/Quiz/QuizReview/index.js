import React, { useContext } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import _isEmpty from 'lodash/isEmpty';

import { QuizContext } from '../../../context/Quiz';
import QuestionCard from '../QuestionCard/index';

const QuizReview = () => {
  const { questionDayList } = useContext(QuizContext);
  return (
    <Grid className="grid-margin-removal parentWidth">
      <Grid.Row className="parentWidth">
        <Header as="h3" textAlign="center">Review</Header>
      </Grid.Row>
      <Grid.Row>
        {
          !_isEmpty(questionDayList) && Object.entries(questionDayList).map(([key, value]) => (
            <QuestionCard
              questionDetails={value}
              questionNumber={key}
              review={true}
            />
          ))
        }
      </Grid.Row>
    </Grid>
  )
}

export default QuizReview;