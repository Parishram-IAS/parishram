import React, { createContext } from 'react';
import questions from '../data/quiz';
import { timeDuration } from '../utils/date';

export const QuizContext = createContext();

class QuizContextProvider extends React.Component {
    state = {
        questionNumber: 1,
        questionDayList: questions['day1'],
        answersObj: {},
        reviewPage: false,
        setTime: null,
    }
    updateQuestionNumber = (questionNumber) => {
        this.setState({
            questionNumber,
        })
    }
    updateQuestionDayList = (day) => {
        this.setState({
            questionDayList: questions['day1'],
        })
    }
    updateAnswersObject = (currentAnswerobj, restart = false) => {
        if (restart) {
            this.setState({ answersObj: {} });
        } else {
            this.setState((prevState) => {
                return {
                    answersObj: { ...prevState.answersObj, ...currentAnswerobj }
                }
            })
        }
    }

    updateReviewPage = (reviewBool) => {
        const dispayTime = timeDuration(this.state.setTime);
        this.setState({
            setTime: dispayTime,
            reviewPage: reviewBool
        })
    }

    updateTime = (date) => {
        this.setState({
            setTime: date,
        })
    }
    render() {
        return (
            <QuizContext.Provider value={{
                ...this.state,
                updateQuestionNumber: this.updateQuestionNumber,
                updateAnswersObject: this.updateAnswersObject,
                updateReviewPage: this.updateReviewPage,
                updateTime: this.updateTime,
            }}>
                {this.props.children}
            </QuizContext.Provider>
        )
    }
}

export default QuizContextProvider;