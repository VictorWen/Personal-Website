import clusterAI_demo from './ClusterAI demo.jpg'
import megaphone_pic from './megaphone.png'
import colonia_demo from './colonia demo.png'
import './App.css';
import React from 'react';
import { InfoBox, InfoButton } from './Components.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { infobox: null };
    }

    render() {
        // console.log("APP RERENDER");
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
                <h3><a className="link" href="https://github.com/RahulR100/LAHacks2021" target="_blank" rel="noreferrer">GitHub page</a></h3>
                <img src={clusterAI_demo} alt="Demonstration of clusterAI website from LAHacks" className="projectImage" />
                <p>
                    Project that I worked on during the LAHacks hackathon in March 2021. 
                    ClusterAI is a visualization tool that represents research papers as spherical nodes in 3D space.
                    A user can input a search query, which the backend will then find research papers related to the search query and then display them in 3D space.
                    Similar research papers are closer to together, and dissimilar papers are farther apart. 
                    The user can drag the 3D model around, zoom in and out, and rotate their view.
                    Upon clicking on a node, the corresponding paper's title, author, abstract, and link are presented to the user.
                </p>
                <p>
                    ClusterAI uses CORE resarch paper API to query and access a database of research papers and their metadata.
                    The metadata is then fed into a BERT-based machine learning model that converts the research paper's abstract and title into a series of word encodings.
                    These encoding provide a numerical representation of the sentence that encapsulates the sentence's semantic meaning.
                    The encodings for the retrieved papers are then fed into a Multidimensional Scaler which compresses the word encodings into a 3D point.
                    Finally, a JavaScipt 3D visualization tool is used to draw the 3D points in a Django served webpage.
                </p>
                <p>
                    I researched, designed, and built the machine learning and multidimensional scaling pipeline that converts the research paper metadata into 3D points.
                    From my research, I concluded that a BERT-based machine learning model would best encapsulate the semantic meaning of the research paper, 
                    enabling the final 3D points to be most accurate. 
                    I also chose a multidimensional scaler for the fact that is motiviation is to preserve the distances between the inputted vectors as much as possible. 
                    Meaning, if papers are deemed semantic dissimilar by the BERT model, then the multidimensional scaler will also try to keep the papers spatially dissimilar.
                    </p>
            </InfoButton>
        );

        const ColoniaButton = (
            <InfoButton title="Colonia Unity Game" id="colonia">
                <h2>Colonia Unity Game</h2>
                <h3><a className="link" href="https://github.com/VictorWen/Colonia" target="_blank" rel="noreferrer">GitHub page</a></h3>
                <img src={colonia_demo} alt="Colonia's terrain map" className="projectImage" />
                <p>
                    Colonia is a resource management, colony building video game that I started work on in August 2020. 
                    Built on the Unity game engine, Colonia is written in C#. 
                    My goal for Colonia was twofold:
                    <ol>
                        <li>Design and develop an interesting concept of a game I had, and</li> 
                        <li>learn more about software design and engineering.</li> 
                    </ol>
                </p>
                <p>
                    The first goal was accomplished, at first, by writing a game proposal detailing every mechanic of the final game. 
                    However, that became to cumbersome and inflexible. 
                    Eventually I switched to designing each mechanic in my head, imagining each scenario the player would be put in, and revising my initial designs. 
                    This allowed me to flexibly design each aspect of the game to best fit the player and provide them with the intended experience.
                </p>
                <p>
                    The second goal, and the more important goal to me, was accomplished by a exploration of various software design techniques. 
                    The overall design of the software was geared towards a frontend-backend approach such that everything was as modular and independent as possible. 
                    The Unity game engine and the MonoBehaviour scripts that it ran acted as the frontend. 
                    These displayed the game information and graphics, while listening to and executing user inputs. 
                    The backend was a decoupled set of C# classes that were agnostic both to the Unity game engine’s pipeline and the MonoBehaviour scripts. 
                    These C# classes managed all the game data and logic, but had no knowledge of any graphical or user information.
                </p>
                <p>
                    For example, the UnitEntity class details information about unit entities, including health, attack, defense, vision, etc. 
                    On the other hand, the UnitEntityController and UnitEntityGraphics were MonoBehaviours scripts 
                    that read the data from the UnitEntity object and displayed the information in a graphical way to the user, 
                    while listening to any user inputs to be translated and relayed to the UnityEntity class. 
                    This, in theory, enables unit testing for the game logic without worrying about the Unity pipeline, instantiating Unity GameObjects, or waiting for user inputs. 
                    Additionally, a third party could provide their own improved modded graphics systems, that may or may not run on Unity, to display the game information.
                </p>
                <p>
                    To accomplish the modular software design of Colonia, plenty of design patterns were used. 
                    The UnitEntity case demonstrates the use of a Model-View-Controller design. 
                    The UnitEntity class was the Model, UnitEntityGraphics was the View, and UnitEntityController was the Controller. 
                    Each passing information to each other in a decoupled fashion. 
                    Singletons were also used as a global dictionary. 
                    Game constants were stored in Unity ScriptableObject files, but in theory they could have been stored anywhere. 
                    The “backend” of the game needed to be agnostic to the storage medium; 
                    thus a Singleton wrapper was used to access a interfaced storage reader and provide values from a dictionary in a decoupled manner. 
                    Similarly, Visitors were used to preserve modularity when dealing with polymorphed classes. 
                    For example, different building types had unique selection mechanics. 
                    However, building type was stored in the “backend,” while the selection logic is written in the “frontend” since it deals with user interaction. 
                    Thus, a visitor pattern was used as a anti-corruption layer.
                </p>
                <p>
                    There is a lot of shortcomings with the current state of Colonia’s software. 
                    Many of the “backend” classes use a Unity engine defined data structures like Vector3, despite my desire for them to be decoupled from Unity. 
                    Additionally, some of the classes made early on in Colonia’s life fail to comply with any of my current standard for modularity. 
                    Some classes know too much and are dependent on many other classes. 
                    Some classes have circular dependencies, which makes them enigmatic. 
                    Most egregious is that no unit tests have been written because of the messy web of older classes. 
                    I hope to eventually address all these issues.
                </p>
                <p>
                    Colonia was never meant to be published, and still is not, 
                    but I was still able to learn plenty about software design principles and patterns throughout my work with it.
                </p>
            </InfoButton>
        );

        const MegaphoneButton = (
            <InfoButton title="Megaphone" id="megaphone">
                <h2>Megaphone</h2>
                <h3><a className="link" href="https://github.com/VictorWen/Megaphone" target="_blank" rel="noreferrer">GitHub page</a></h3>
                <img src={megaphone_pic} className="projectImage" alt="Megaphone logo"/>
                <p>
                    Megaphone is a Discord bot that plays personalized fanfare that I made in Janurary 2021. 
                    It is fully configurable to both user and admin customization, 
                    including the fanfare audio, length of the audio, default fanfare audio, blacklist and whitelist, and a disable option,
                    and stores each personalized configuration in an online database. 
                    Megaphone is built on the discord.py API to communicate with Discord, get user interaction, and send the fanfare audio bytes. 
                    Currently Megaphone is published on a Discord bot catalog website called <a className="link" href="https://top.gg/bot/803491378326667285" target="_blank" rel="noreferrer">top.gg</a>, 
                    and is being used in over 40+ Discord servers, with over 100+ users. 
                </p>
            </InfoButton>
        );

        const MusicGenreButton = (
            <InfoButton title="Music Genre Classification" id="musicgenre">
                <h2>Automatic Music Genre Classification</h2>
            </InfoButton>
        );

        const PersonalWebsiteButton = (
            <InfoButton title="Personal React Website" id="personal">
                <h2>This Personal Website</h2>
                <h3><a className="link" href="https://github.com/VictorWen/Personal-Website" target="_blank" rel="noreferrer">GitHub page</a></h3>
                <p>
                    This personal website was built on React and served as an introduction to HTML/CSS and frontend web development for me. 
                    I gave myself challenges for building this website to help me better learn about HTML/CSS and React, 
                    including animations, transitions, flex boxes, hover effects, scaliability, backgrounds, buttons, and modular React components. 
                    Additionally, the entire website is delivered via a single page with dynamic text provided via React/JavaScript.
                </p>
                <p>
                    Modular components (InfoBox and InfoButton) can be seen with the buttons and the text they change. 
                    InfoBox is the black contrainer this text currently is in. 
                    Each InfoBox contains an area for text and an area for InfoButtons (the buttons with the project titles). 
                    Each InfoButton relays text to the InfoBox for it to display in the text area. 
                    The design is such that InfoButton and InfoBox can display any arbitrary HTML and be assigned any CSS class. 
                    Additionally, another challenge was for the button to remember their state when they are click off. 
                    This is done by a callback that the children of the InfoButton can call to update the save state of the button. 
                    For example, if you click on “About Me” at the top of the page and then click back on “Experience,” 
                    this “This Personal Website” text will still be shown as the Personal Website button remembers that it was selected.
                </p>
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
                        <ul className="colList">
                            <h3>Knowledge Areas:</h3>
                            <li>Machine Learning</li>
                            <li>Object-Oriented Programming</li>
                            <li>Software Design Patterns</li>
                            <li>Algorithms and Data Structures</li>
                            <li>Web Development (both backend and frontend)</li>
                            <li>Networking (RESTful APISs)</li>
                        </ul>
                        <ul className="colList">
                            <h3>Programming languages:</h3>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>Python</li>
                            <li>Octave/MATLAB</li>
                            <li>POSIX Shell Scripting</li>
                        </ul>
                        <ul className="colList">
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
                <h3>Below are some of the projects I have worked on.</h3>
                <InfoBox className="background-black font-color-white" defaultText="Select a project for further information." buttons={[ColoniaButton, ClusterAIButton, MegaphoneButton, MusicGenreButton, PersonalWebsiteButton]} />
            </InfoButton>
        );

        return (
            <div>
                <div className="background"/>
                <div className="text-align-center start-animation">
                    <div className="topplate">
                        <h1 className="nameplate">Victor Wen</h1>
                        <h2 className="studentPlate">Computer Science Undergrad <br/> University of California - Los Angeles</h2>
                        <h3 className="contactInfo">
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
