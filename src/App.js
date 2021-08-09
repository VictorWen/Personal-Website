import clusterAI_demo from './ClusterAI demo.jpg'
import './App.css';
import React from 'react';
import { InfoBox, InfoButton } from './Components.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { infobox: null };
    }

    render() {
        console.log("APP RERENDER");
        const AboutMeButton = (
            <InfoButton title="About Me" isSelected={true} id="aboutme">
                <h2>About Me</h2>
                <p>
                    I am an undergraduate Computer Science major who loves tackling difficult challenges. 
                    The more difficult the challenge, the more I become obsessed with it. 
                    To me, challenges are opportunities to shape my potential. 
                    I get to engage in logical deduction, teamwork, critical thinking, and creative application. 
                    Each new challenge cultivates these skills and readies me to tackle more demanding challenges.
                </p>
                <p>
                    In a sense, computers are an endless well of difficult challenges. 
                    Computers are powerful, wide-reaching tools used by almost all industries and fields of research. 
                    As a result, computers are burdened with mountains of difficult perplexing challenges. 
                    It sometimes takes a combination of years of research, well-knit teamwork, and ingenious computer science to solve some of these challenges. 
                    In other words, I could never be bored with a career like this.
                </p>
                <p>
                    Currently, I am studying at the University of California - Los Angeles, 
                    where I eagerly learn about Object-Oriented Programming, computer organization, algorithms, data structures, and more. 
                    The know-how I continue to develop at UCLA, supplemented by my own expeditions into computer science, 
                    will greatly prepare me to properly engage with any new challenges this career path will throw at me.
                </p>
            </InfoButton>
        );

        const ClusterAIButton = (
            <InfoButton title="ClusterAI" id="cluster">
                <h2>Cluster AI</h2>
                <img src={clusterAI_demo} alt="Demonstration of clusterAI website from LAHacks" className="projectImage" />
                <p>&emsp;Project that I worked on during the LAHacks hackathon in March 2021. ClusterAI is a visualization tool that represents research papers as spherical nodes in 3D space.
                    A user can input a search query, which the backend will then find research papers related to the search query and then display them in 3D space.
                    Similar research papers are closer to together, and dissimilar papers are farther apart. The user can drag the 3D model around, zoom in and out, and rotate their view.
                    Upon clicking on a node, the corresponding paper's title, author, abstract, and link are presented to the user.</p>
                <p>&emsp;ClusterAI uses CORE resarch paper API to query and access a database of research papers and their metadata.
                    The metadata is then fed into a BERT-based machine learning model that converts the research paper's abstract and title into a series of word encodings.
                    These encoding provide a numerical representation of the sentence that encapsulates the sentence's semantic meaning.
                    The encodings for the retrieved papers are then fed into a Multidimensional Scaler which compresses the word encodings into a 3D point.
                    Finally, a JavaScipt 3D visualization tool is used to draw the 3D points in a Django served webpage.</p>
                <p>&emsp;I researched, designed, and built the machine learning and multidimensional scaling pipeline that converts the research paper metadata into 3D points.
                    From my research, I concluded that a BERT-based machine learning model would best encapsulate the semantic meaning of the research paper, enabling the
                    final 3D points to be most accurate. I also chose a multidimensional scaler for the fact that is motiviation is to preserve the distances between the inputted vectors
                    as much as possible. Meaning, if papers are deemed semantic dissimilar by the BERT model, then the multidimensional scaler will also try to keep the papers spatially dissimilar.</p>
            </InfoButton>
        );

        const ColoniaButton = (
            <InfoButton title="Colonia Unity Game" id="colonia">
                <h2>Colonia Unity Game</h2>
                <p></p>
            </InfoButton>
        );

        const CookyAppButton = (
            <InfoButton title="Cooky Website" id="cooky">
                <h2>Cooky Website</h2>
            </InfoButton>
        );

        const MusicGenreButton = (
            <InfoButton title="Music Genre Classification" id="musicgenre">
                <h2>Automatic Music Genre Classification</h2>
            </InfoButton>
        );

        const PersonalWebsiteButton = (
            <InfoButton title="This Personal Website" id="personal">
                <h2>This Personal Website</h2>
            </InfoButton>
        );

        const ExperienceButton = (
            <InfoButton title="Experience" id="experience">
                <h2>Experience</h2>
                <p>
                    I have been involved with computer science since 2016, 
                    working on various projects in conjunction with taking computer science classes in high school and UCLA. 
                    These projects were focused on learning as much as possible about a subject rather than creating a functioning product. 
                    As such, I have  experience with a variety of areas in computer science, including:
                    <div className="threeColList">
                        <ul>
                            <h3>Knowledge Areas:</h3>
                            <li>Machine Learning</li>
                            <li>Object-Oriented Programming</li>
                            <li>Software Design Patterns</li>
                            <li>Algorithms and Data Structures</li>
                            <li>Web Development (both backend and frontend)</li>
                            <li>Networking (RESTful APISs)</li>
                        </ul>
                        <ul>
                            <h3>Programming languages:</h3>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>Python</li>
                            <li>Octave/MATLAB</li>
                            <li>POSIX Shell Scripting</li>
                        </ul>
                        <ul>
                            <h3>Frameworks, Libraries, and Tools:</h3>
                            <li>Node.js (Express, React, Firebase)</li>
                            <li>Unity Game Engine</li>
                            <li>Discord RESTful API (discord.py and discord.js)</li>
                            <li>Python Machine Learning libraries (SciKit-Learn, PyTorch, Tensorflow, and OpenCV)</li>
                            <li>HTML + CSS</li>
                            <li>Shell Commands</li>
                        </ul>
                    </div>
                </p>
                <InfoBox className="background-black font-color-white" defaultText="Select a project for further information." buttons={[ColoniaButton, ClusterAIButton, CookyAppButton, MusicGenreButton, PersonalWebsiteButton]} />
            </InfoButton>
        );

        return (
            <div>
                <div className="background"/>
                <div className="text-align-center start-animation">
                    <div className="topplate">
                        <h1 className="nameplate">Victor Wen</h1>
                        <h3>
                            <a href="mailto:xiaoyuvictor@gmail.com" className="link">xiaoyuvictor@gmail.com</a><br/>
                            <a href="mailto:vicwen02@g.ucla.edu" className="link">vicwen02@g.ucla.edu</a><br/>
                            <a className="link" href="https://www.linkedin.com/in/victor-wen-51443b1b9/" target="_blank" rel="noreferrer">LinkedIn</a><br/>
                            <a className="link" href="https://github.com/VictorWen" target="_blank" rel="noreferrer">GitHub</a>
                        </h3>
                    </div>
                    <InfoBox buttons={[AboutMeButton, ExperienceButton]} selected="aboutme" className="font-color-white"/>
                </div>
            </div>
        );
    }
}

export default App;
