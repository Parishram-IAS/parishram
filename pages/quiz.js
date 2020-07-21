import React, { useState,useEffect } from 'react';

import Layout from '../components/Layout';
import { Button, Grid, List } from 'semantic-ui-react';
import QuizWrapper from '../components/Quiz';
import QuizFilter from '../components/Quiz/QuizFilter';
import QuizContextProvider from '../context/Quiz';

const Quiz = () => {
    const [showTest, setShowTest] = useState(true);
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Layout>
            <Grid className="grid-margin-removal">
                <Grid.Row>
                    <List>
                        To view Solutions, follow these instructions:
                        <List.Item> Click on – ‘Start Test’ button</List.Item>
                        <List.Item>Click on ‘Finish Test’ button</List.Item>
                    </List>
                </Grid.Row>
                <Grid.Row>
                    <QuizContextProvider>

                        <Grid.Column mobile={16} tablet={16} computer={11}>
                            {showTest ? (
                                <Button onClick={() => setShowTest(false)}>
                                    Start test
                    </Button>
                            ) : (
                                    <QuizWrapper />
                                )
                            }
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <QuizFilter />
                        </Grid.Column>
                    </QuizContextProvider>

                </Grid.Row>
            </Grid>
        </Layout>
    )
}

export default Quiz;