import React, { useEffect } from 'react';

import Layout from '../../../components/Layout';
import { getIndividualArticle } from '../../../services/firebase/article';
import { Grid, Image, Header, Container, Segment } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

const NewFeed = ({ data }) => {
debugger
    console.log('data', data)
    return (
        <Layout>
            <Grid className='grid-margin-removal'>
                <Grid.Row>
                    <Image src="/assests/images/newsFeed_cover.png" className="news-feed-carousel" />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <div className="newFeed-profile-picture">
                            <Image src="https://images.unsplash.com/photo-1567468150176-8d1c64777720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <div classNameName="ProfileHeaderWraper">
                            <Header as="h3">
                                Title
                                <Header.Subheader>
                                   sub heading
                                </Header.Subheader>
                            </Header>
                            <div>
                               <span className="badge-group">tag1 </span>
                               <span className="badge-group">tag 2</span>
                            </div>
                        </div>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Segment style={{width:"100%"}}>
                        <div className="newsFeed-body-wrapper">
                            {ReactHtmlParser('<p style="text-align: justify;"><strong>Context</strong></p> <p style="text-align: justify;">The current scenario has led <strong>India to enter into a technology-driven world</strong> and because of it the changes in the country&rsquo;s political discourse are natural and communication between parties and people will become simpler.</p> <p style="text-align: justify;"><strong>Evolution of Digital Media in India</strong></p> <ul> <li> <p style="text-align: justify;">The countries across the globe are<strong> moving towards newer modes of public communication</strong> even as their democracies kept evolving.</p> </li> <li style="text-align: justify;"> <p>With the advent of the printing press in the 15th century, <strong>science and knowledge found the fuel to spread</strong> from one corner of the world to the other.</p> </li> <li style="text-align: justify;"> <p>The <strong>digital media is rapidly growing in importance</strong>, <strong>bringing swift changes in the modes of communication </strong>and this process of communication has become an ever evolving field with the advent of technology.</p> </li> <li> <p style="text-align: justify;">The <strong>legacy media consisting of established mass media institutions</strong> that predate the Internet, such as newspapers, radio shows, and television news programs, coexist with digital media that are the outgrowth of technological innovation</p> </li> </ul> <p style="text-align: justify;"><strong>Public Gatherings&rsquo; Impact on Political Sphere</strong></p> <ul> <li> <p style="text-align: justify;">The first experiment with <strong>public gatherings to take political ideas to people happened when the 19th century</strong> was drawing to a close.</p> </li> <li style="text-align: justify;"> <p>William Ewart Gladstone, who got elected as <strong>Britain&rsquo;s prime minister in 1892,</strong> had made public gatherings the medium to communicate his political ideas.</p> </li> <li style="text-align: justify;"> <p>During India&rsquo;s freedom struggle, the<strong> trend of using newspapers and magazines for communication picked up</strong> and post-Independence, <strong>political parties continued to use them</strong> to further their political discourse.</p> </li> <li> <p style="text-align: justify;">The <strong>newspapers, magazines, underground radio stations etc.</strong> became the symbol of mass communication during the struggle of India&rsquo;s freedom.</p> </li> </ul> <p style="text-align: justify;"><strong>Role of Digital Media in Political Communication and Mass Contact</strong></p> <ul> <li> <p style="text-align: justify;">The digital mode of communication is now the<strong> most effective mode of communication such as Tweets and Facebook</strong>, and whose posts are sources of information for the so-called mainstream communication channels.</p> </li> <li style="text-align: justify;"> <p>The digital media plays an important role as it <strong>allows a large programme to be organised with such little resources and so little time.</strong></p> </li> <li style="text-align: justify;"> <p>The impact of digital media is such that it has <strong>helped in redefining the world&rsquo;s economic order</strong>, <strong>changed many aspects of social life</strong> and <strong>helped in spreading information and knowledge</strong> in a democratic and cost-effective way.</p> </li> <li style="text-align: justify;"> <p>The use of <strong>words, images, videos and sounds make the digital media distinguish itself</strong> from other modes of traditional media.</p> </li> <li> <p style="text-align: justify;">The digital media can <strong>relay information directly to individuals without the intervention of editorial or institutional gatekeepers</strong>, which are intrinsic to legacy forms.</p> </li> </ul> <p style="text-align: justify;"><strong>Importance of Digital Media in Political Sphere</strong></p> <ul> <li> <p style="text-align: justify;">The digital media and social media are being <strong>increasingly used in political campaigns with youngsters</strong> constituting a majority of the voting population in India.</p> </li> <li style="text-align: justify;"> <p>The <strong>political leaders, government leaders and political parties are getting closer to the masses with digital medi</strong>a and social media platforms turning into mass media.</p> </li> <li style="text-align: justify;"> <p>The impact of usage of digital forums has set the <strong>trend for personalisation of politics and comparisons between politician</strong>s who use social media and those who do not have online presence inevitable in this e-world.</p> </li> <li style="text-align: justify;"> <p>It <strong>serves as a hyperlink </strong>that connects or leads content or a document to another specific text, file, graphic or object.</p> </li> <li style="text-align: justify;"> <p style="text-align: justify;">It facilitates the <strong>production, dissemination, and exchange of political content on platforms</strong> and within networks that accommodate interaction and collaboration.</p> </li> </ul> <p style="text-align: justify;"><strong>How Digital Media can redefine the Political Communication in India</strong></p> <ul> <li> <p style="text-align: justify;">The situation emerging from the coronavirus pandemic signals<strong> changes in the ways of public communication and mass contact.</strong></p> </li> <li style="text-align: justify;"> <p>With <strong>social distancing norms becoming mandatory amid the growing need for public communication</strong>, digital media has emerged as a powerful platform and since India is a multi-party democracy, political parties are expected to keep channels of communication open even during difficult situations.</p> </li> <li style="text-align: justify;"> <p>The Home Minister Amit Shah&rsquo;s Bihar Jansamvad rally has introduced us to a <strong>new experience of digital communication </strong>and the digitally-driven rally saw the participation of crores of people.</p> </li> <li style="text-align: justify;"> <p>A lot of resources are spent for managing the logistics for large public gathering during political communication and <strong>digital media can certainly avoid such expenses for the same number of gatherings.</strong></p> </li> <li style="text-align: justify;"> <p>It is possible that the <strong>use of banners, posters and pamphlets will reduce</strong> in the near future and there is likely to be greater acceptance of campaigning through digital means.</p> </li> <li style="text-align: justify;"> <p>The digital media like <strong>videos, video blogs, blogs, Facebook and Twitter and the like have turned into forums</strong> that empower people by allowing them to share their voice, concerns and creativity.</p> </li> </ul> <p style="text-align: justify;"><strong>Way Forward</strong></p> <ul> <li> <p style="text-align: justify;">For a <strong>successful</strong> and a <strong>vibrant democracy,</strong> the <strong>public participation is the bedrock</strong> of this process and therefore debates, discussions and a healthy exchange of ideas go a long way in strengthening the foundations of democratic systems.</p> </li> <li style="text-align: justify;"> <p>The <strong>success of various digital innovations in public communication has opened the doors for its increased use</strong> in the times to come and it has also been possible because of the growing penetration of digital technology in India&rsquo;s rural areas.</p> </li> <li> <p style="text-align: justify;">The <strong>digital media has both expanded and undercut the traditional roles of the press in a democratic society</strong> as they have vastly increased the potential for political information to reach even the most disinterested citizens.</p> </li> </ul> <p style="text-align: justify;"><strong>Source: The Indian Express</strong></p>')}
                        </div>
                    </Segment>
                </Grid.Row>
            </Grid>
        </Layout>
    )
};

export default NewFeed;

export async function getServerSideProps({ req, query, params }) {
    let article = {};
    const newsType = query.news;
    const newsFeed = query.newFeed;
    try {
        article = await getIndividualArticle(newsType, newsFeed);
    } catch (err) {
        // article = err
    }

    return {
        props: {
            data: JSON.stringify(article),
        },
    };
}